const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    post: {required: true, type: ObjectId, ref: Post},
    body: {required: true, type: String}
})

const commentModel = mongoose.model('Comment', commentSchema)

module.exports = commentModel