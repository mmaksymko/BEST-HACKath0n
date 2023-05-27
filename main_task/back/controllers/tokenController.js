const mongoose = require('mongoose')
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')
require("dotenv").config()

const handleRefreshToken = async (req, res) => {
    try {
        const cookies = req.cookies
        if(!cookies?.jwt) return res.sendStatus(401)
        const refreshToken = cookies.jwt
        const user = await User.findOne({ email: email,  JWTToken: refreshToken}).lean()
        if(user === null){
            return res.status(400).json({error:"User does not exist"})
        }
        
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoder) => {
                if(err || user.email !== decoded.email) return res.sendStatus(403)
                const accessToken = jwt.sign(
                    { "email": decoded.email },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '30s' } //must be 15m
                )
                res.json({ accessToken })
            }
        )
        
    } catch (error) {
        console.log(error.message)
        res.json({status:"error"})
    }
}

const handleLogout = async (req, res) => {
    try {
        const cookies = req.cookies
        if(!cookies?.jwt) return res.sendStatus(204)
        
        const refreshToken = cookies.jwt
        const user = await User.findOne({ email: email,  JWTToken: refreshToken}).lean()
        if(user === null){
            res.clearCookie('jwt', { httpOnly: true })
            return res.sendStatus(204)
        }
        await User.updateOne({ email: user.email },
            { $set: { JWTToken: '' } },
            { upset: true }, 
            function(err){
                if (err) return res.send(500, {error: err});
                return res.send('Succesfully saved.');
            })
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
        res.sendStatus(204)     
    } catch (error) {
        console.log(error.message)
        res.json({status:"error"})
    }
}

module.exports = {
    handleRefreshToken,
    handleLogout
}

