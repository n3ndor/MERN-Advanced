require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const socketio = require('socket.io');
const userRoutes = require('./routes/User.routes');
const { expressjwt } = require('express-jwt');
const jwt = require('jsonwebtoken');

// JWT error handling middleware
const jwtError = function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({ message: 'invalid token' });
    }
};

const app = express();

// Configuring CORS
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
app.use(cors(corsOptions));

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

    socket.on('join', ({ username }) => {
        console.log(`${username} joined the chat`);

        socket.emit('message', { user: 'Chat info', text: `${username}", welcome to the chat!` });
        socket.broadcast.emit('message', { user: 'Chat info', text: `${username} has joined the chat!` });

    });

    socket.on('sendMessage', (message) => {
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
