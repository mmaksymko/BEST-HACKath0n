const jwt = require('jsonwebtoken')
require('dotenv').config()

const veryfyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if (!authHeader) return res.sendStatus(401).json({ error: 'Unathorized' })
    console.log(authHeader)
    const token = authHeader.split(' ')[1]
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403).json({ error: 'Access not allowed' })
            req.user = decoded.email
            next()
        }
    )
}

module.exports = veryfyJWT