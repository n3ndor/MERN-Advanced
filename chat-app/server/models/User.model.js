const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [2, "Username have to be at least 2 Characters"]
    },
    password: {
        type: String,
        required: true,
        minlength: [2, "Password have to be at least 2 Characters"]
    }
});

// Password hashing middleware
UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
