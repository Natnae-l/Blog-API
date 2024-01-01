const jwt = require('jsonwebtoken');
const User = require('../models/userModel')

login = async (req, res, next) => {
    let {username, password} = req.body;

    if (username && password){
        let user = await User.findOne({
            username: username
        }) 
        if (user){
            if(user.password == password){
                const token = jwt.sign({name: username}, process.env.secretJWT);
                res.cookie('token', token, {
                    httpOnly: true
                })
                res.send("you're logged in!")   
            } else {
                res.send('password or username incorrect')
            }
        }
    } else { res.send('signup first')}
}

signUp = async (req, res, next) => {
    
    if (req.body){
        let user = new User(req.body);
        try {
         user = await user.save();
         res.send(user)
        } catch (error) {
            console.log(error.message)
        }
    }
}

post = async (req, res, next) => {
    res.send({
        data: 'authorized'
    })
}
logOut = async (req, res, next) => {
    res.cookie("token", '')
    res.send("you're logged out!")
}


module.exports = {
    login, post, logOut, signUp
}