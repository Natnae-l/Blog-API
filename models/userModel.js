const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {required: true, type: String},
    password: {required: true, type: String}
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;

