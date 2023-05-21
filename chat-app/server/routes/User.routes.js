const express = require('express');
const User = require('../models/User.model');
const createTokenAndSend = require('../helpers/auth');

const router = express.Router();

// Registration route
router.post('/register', async (req, res, next) => {

    const { username, password } = req.body;

    try {
        // Check if user already exists
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).send('User already exists');
        }

        // Create a new user
        const newUser = new User({ username, password });
        await newUser.save();

        // Create a token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send back token and user
        res.cookie('token', token, { httpOnly: true });
        res.json(newUser);
    } catch (error) {
        next(error); // Forward the error to the error-handling middleware
    }
    // Create a token and send back token and user
    createTokenAndSend(newUser, res);
});

// Login route
router.post('/login', async (req, res, next) => {
    const { username, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send('Invalid username or password');
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).send('Invalid username or password');
        }

        // Create a token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send back token and user
        res.cookie('token', token, { httpOnly: true });
        res.json(user);
    } catch (error) {
        next(error); // Forward the error to the error-handling middleware
    }
    createTokenAndSend(user, res);
});


router.get('/user', (req, res) => {
    const userId = req.user.id;

    // Retrieve the user data from the database using the user ID
    User.findById(userId)
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Return the user data
            res.json(user);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        });
});

module.exports = router;
