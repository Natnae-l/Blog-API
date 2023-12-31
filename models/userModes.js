const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {required: true, type: String},
    password: {required: true, type: Number}
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;

