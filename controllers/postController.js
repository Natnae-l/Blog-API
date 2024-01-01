const Post = require('../models/postModel')
const Comment = require('../models/commentModel')
const jwt = require('jsonwebtoken')


// post controllers
postInfo = async (req, res, next) => {
    let {title, description} = req.body

    let token = req.cookies.token
    const user = jwt.verify(token, process.env.secretJWT)._id
    
    try {
        let newPost = new Post({title, description, user}) 
        newPost = await newPost.save()
        res.send(newPost)
    } catch (error) {
        console.log(error)
    }
    
}
postComment = async (req, res, next) => {
    let {body} = req.body
    let post = req.params.post
        console.log(req.params)
    try {
        let newcomment = new Comment({post, body}) 
        newcomment = await newcomment.save()
        res.send(newcomment)
    } catch (error) {
        console.log(error)
    }
}

// get controllers
getInfo = async (req, res, next) => {
    let info = await Post.find();
    res.json(info)
}
getComment = async (req, res, next) => {
    try {
        let comment = await Comment.find({post: req.params.post});
        res.json(comment)
    } catch (error) {
        console.log(error)
    }
    
}


module.exports = {
    postInfo, postComment, getInfo, getComment
}