const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    password: String
}, { strict: false });

module.exports = mongoose.model('User', UserSchema, 'users');