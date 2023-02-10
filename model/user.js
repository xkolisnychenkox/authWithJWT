const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),
      {isEmail} = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowerCasa: true,
        validate: [isEmail, 'please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minLength: [8, 'Minimum password length is 8 characters']
    }
});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.post('save', function (doc, next) {
    console.log('the new user created and saved', doc.email);
    next();
});

const User = mongoose.model('user', userSchema);

module.exports = User;