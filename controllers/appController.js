const jwt = require('jsonwebtoken');

login = async (req, res, next) => {
    const token = jwt.sign({name: 'you'}, process.env.secretJWT);

    res.cookie('token', token, {
        httpOnly: true
    })
    res.send('check cookie')
}

data = async (req, res, next) => {
    res.send({
        data: 'authorized'
    })
}
logOut = async (req, res, next) => {
    res.cookie("token", "")
    res.send("you're logged out!")
}


module.exports = {
    login, data, logOut
}