require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const socketio = require('socket.io');
const userRoutes = require('./routes/User.routes');
const { expressjwt } = require('express-jwt');
const jwt = require('jsonwebtoken');

const Message = require('./models/Message.models');
const connectedUsers = {};

// JWT error handling middleware
const jwtError = function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({ message: 'invalid token' });
    }
};

const app = express();

// Configuring CORS
const corsOptions = {
    origin: true,
    credentials: true,
    methods: ["GET", "POST"], //"PUT" for editing
    allowedHeaders: ["*"]
};
app.use(cors({ credentials: true, origin: true }));

// Body parser middleware
app.use(express.json());

// JWT middleware
app.use(expressjwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }).unless({ path: ['/auth'] }));
app.use(jwtError);

// User routes
app.use('/auth', userRoutes);

// Welcome route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/chat-db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log(err));

// Configure Socket.IO
const server = http.createServer(app);
const io = socketio(server, {
    cors: corsOptions
});

//socket.io functionality
io.on('connection', (socket) => {
    console.log('New WebSocket connection');

    // When a new user joins, send them the chat history
    socket.on('join', async ({ username }) => {
        console.log(`${username} joined the chat`);

        let messages = await Message.find(); // Fetch messages from the database
        socket.emit('chat history', messages); // Send chat history to the new user

        socket.emit('message', { user: 'Chat info', text: `${username}, welcome to the chat!` });
        socket.broadcast.emit('message', { user: 'Chat info', text: `${username} has joined the chat!` });
    });

    // When a user sends a message, save it in the database
    socket.on('sendMessage', async (message) => {
        let newMessage = new Message(message);
        await newMessage.save(); // Save message to the database

        io.emit('message', { user: message.user, text: message.text });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        socket.broadcast.emit('message', { user: 'admin', text: 'A user has left the chat.' });
    });
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
});

// Start the server
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`Server running on port ${port}`));
