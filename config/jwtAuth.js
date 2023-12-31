const jwt = require('jsonwebtoken')

module.exports = async function checkAuth(req, res, next){
    const token = req.cookies.token;
    if (token){
        const auth = jwt.verify(token, process.env.secretJWT)
        if (auth){
            next()
        } else {
            res.send('not authorized')
        }
    } else {
        res.send('You SCAMMER!')
    } 
}