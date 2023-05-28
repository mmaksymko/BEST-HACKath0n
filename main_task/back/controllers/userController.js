const mongoose = require('mongoose')
const User = require('../models/user.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require("dotenv").config()

const signup = async (req, res) => {
    try {
        const pass = await bcrypt.hash(req.body.password, 10)
        const response = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: pass,
            phone: req.body.phone
        })
        // console.log("User created ", response)
        // User.find({}).then(console.log)
        res.status(200).send(await User.findOne({ email: req.body.email }).lean())
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: "Email or phone already in use" })
        }
        console.log(error.message)
        res.status(400).send(error)
    }
}

const login = async (req, res) => {
    try {
        User.find({}).then(console.log)
        const { email, password } = req.body
        let user = await User.findOne({ email }).lean()
        if (!user)
            return res.status(400).json({ error: "User does not exist" })

        if (await bcrypt.compare(password, user.password)) {
            console.log(1)
            const accessToken = jwt.sign(
                { email: user.email },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' } //must be 15m
            )
            const refreshToken = jwt.sign(
                { email: user.email },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '1d' }
            )
            await User.updateOne({ email: req.body.email },
                { $set: { JWTToken: refreshToken } },
                { upset: true },
                function (err) {
                    if (err) return res.send(500, { error: err });
                    // return res.send('Succesfully saved.');
                })
            user = await User.findOne({ email }).lean()
            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })
            console.log("SLAAAAAAAAAAAAAAAAY")
            res.json({ user, accessToken })
            return;
            // return res.status(200).send(user)
        }
        return res.status(400).json({ error: "Wrong password" })
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = {
    signup,
    login
}

