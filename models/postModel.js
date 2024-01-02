const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({
    user: { required: true, type: Schema.ObjectId, ref: 'User'},
    title: {required: true, type: String},
    description: {required: true, type: String},
    published: {required: true, type: String}
})

const postModel = mongoose.model('Post', postSchema)

module.exports = postModel