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
    
}

// get controllers
getInfo = async (req, res, next) => {
    let info = await Post.find();
    res.json(info)
}


module.exports = {
    postInfo, postComment, getInfo
}