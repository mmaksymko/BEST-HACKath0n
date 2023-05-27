const mongoose = require('mongoose')
const User = require('../models/user.js')

const addProposition = async (req, res) => {
    // console.log(req.body)
    // try {
    // let user = new User({
    //     firstName: 'name',
    //     lastName: 'lastname',
    //     email: 'cocks@gmail.com',
    //     password: 'chchchchchcchanges',
    //     phone: '029387997134837',
    //     proposition: []
    // })
    // user.save()

    // User.find({}).then(users => {
    //     users.forEach(user => console.log(user))
    // })

    User.updateOne(
        {
            _id: req.params.id
        }, {
        $push: {
            propositions: {
                title: req.body.title,
                description: req.body.description,
                creationDate: req.body.creationDate,
                expiringDate: req.body.expiringDate,
                city: req.body.city,
                category: req.body.category
            }
        }
    }).then(res.status(200).json("Success!"))
        .catch(err => {
            console.log(err); res.status(400).json({ "Error": err })
        })

    // User.find({}).then(data => data.forEach(console.log))
}

const getAllPropositions = (req, res) => {
    User.find({})
        .then(users => res.status(200).send(JSON.stringify(users.map(user => user.propositions).flat().filter(prop => prop.status === 'waiting'))))
        .catch(err => {
            res.status(400).json({ "Error": err })
        })
}

const getAllUsersPropositions = (req, res) => {
    User.find({ _id: req.params.id })
        .then(users => res.status(200).send(JSON.stringify(users.map(user => user.propositions).flat())))
        .catch(err => res.status(400).json({ "Error": err }))
}

const getAllUsersTakenPropositions = (req, res) => {
    User.find({
        "propositions.performerID": req.params.id
    }).then(users => res.status(200).send(JSON.stringify(users.map(user => user.propositions).flat())))
        .catch(err => res.status(400).json({ "Error": err }))
}

const getAllExceptUsersPropositions = (req, res) => {
    User.find({
        _id: { $ne: req.params.id },

    })
        .then(users => res.status(200).send(JSON.stringify(users.map(user => user.propositions).flat().filter(prop => prop.status === 'waiting'))))
        .catch(err => res.status(400).json({ "Error": err }))
}

const getAuthorByPropositionId = (req, res) => {
    User.find({
        "propositions._id": req.params.id
    })
        .then(user => res.status(200).send(JSON.stringify(user)))
        .catch(err => res.status(400).json({ "Error": err }))
}

const completeProposition = (req, res) => {
    User.updateOne({
        "propositions.$._id": req.params.id
    }, {
        '$set': {
            "propositions.$.status": "done"
        }
    }).then(user => res.status(200).json("Success!"))
        .catch(err => res.status(400).json({ "Error": err }))
}

const acceptProposition = (req, res) => {
    User.updateOne({
        "propositions.$._id": req.params.id
    }, {
        '$set': {
            "propositions.$.performerID": req.params.performerID,
            "propositions.$.status": "accepted"
        }
    }).then(user => res.status(200).json("Success!"))
        .catch(err => res.status(400).json({ "Error": err }))
}


const getProposition = (req, res) => {
    User.findOne({
        "propositions._id": req.params.id
    }).then(user => res.status(200).send(JSON.stringify(user.propositions.filter(obj => obj._id == req.params.id)[0])))
        .catch(err => res.status(400).json({ "Error": err }))
}

module.exports = {
    addProposition,
    getAllPropositions,
    getAllUsersPropositions,
    getAllUsersTakenPropositions,
    getAllExceptUsersPropositions,
    getAuthorByPropositionId,
    completeProposition,
    acceptProposition,
    getProposition
}