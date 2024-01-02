const Post = require('../models/postModel')
const Comment = require('../models/commentModel')
const jwt = require('jsonwebtoken')


// post controllers
postInfo = async (req, res, next) => {
    let {title, description, published = false} = req.body

    // let token = req.cookies.token
    // const user = jwt.verify(token, process.env.secretJWT)._id
    const user = "6592a53434861eba3bdbe1a2" ;
    
    try {
        let newPost = new Post({title, description, user, published}) 
        newPost = await newPost.save()
        res.send(newPost)
    } catch (error) {
        console.log(error)
    }
    
}
postComment = async (req, res, next) => {
    let {body} = req.body
    let post = req.params.post
       
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
    let info = await Post.find({published: true}, '-published');
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

// admin controllers
getAllPost = async (req, res, next) => {
    try {
       let allPosts = await Post.find({});
       res.json(allPosts)
    } catch (err) {
        console.log(err)
    }
}
publishPost = async (req, res, next) => {
    let here = await Post.updateMany({published: undefined}, {$set: {published: true}});
    res.json(here)
}
editComment = async (req, res, next) => {
    let {post, _id} = req.params
    let {body} = req.body

    try {
        let result = await Comment.updateOne({post, _id}, {$set: {body}})
        res.json(result)
    } catch (err) {
        console.log(err)
    }
}
deleteComment = async (req, res, next) => {
    let {post, _id} = req.params

    try {
        let result = await Comment.deleteOne({post, _id})
        res.json(result)
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    postInfo, postComment, getInfo, getComment, 
    editComment, deleteComment, publishPost, getAllPost
}