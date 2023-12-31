const jwt = require('jsonwebtoken');
const User = require('../models/userModel')

login = async (req, res, next) => {
    const token = jwt.sign({name: 'you'}, process.env.secretJWT);

    res.cookie('token', token, {
        httpOnly: true
    })
    res.send("you're logged in!")
}

signUp = async (req, res, next) => {
    
    if (req.body.username && req.body.password){
        let user = new User(req.body);
        try {
         user = await user.save();
         console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }
}

data = async (req, res, next) => {
    res.send({
        data: 'authorized'
    })
}
logOut = async (req, res, next) => {
    res.cookie("token", '')
    res.send("you're logged out!")
}


module.exports = {
    login, data, logOut, signUp
}