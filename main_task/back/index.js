const express = require('express')
const app = express()
const port = 7000
const http = require('http').Server(app)
const cors = require('cors')
app.use(cors())
app.use(express.json());

// const chatRouter = require('./routes/chatRouter')
// app.use('/chat', chatRouter)

const mongoose = require('mongoose')
//replace to env variables on deploy
mongoose.connect("mongodb+srv://UserDB:UserDBPassword@maksymcluster.ozlrsuf.mongodb.net/?retryWrites=true&w=majority").then(console.log("Successful"))
    .catch(console.log)


// mongoose.connect('mongodb+srv://maksymkomyna:<Qq22012004>@maksymcluster.ozlrsuf.mongodb.net/', { useNewUrlParser: true, useUnifiedtopology: true })
//     .then(() => console.log("Connected"))
//     .catch(err => console.log(err))


//.then(console.log(x)).catch(e => console.log(e))


// Chat.find({}).then(data => console.log(data[data.length - 1]))

// Chat.find({ "members.user2": 'maksym.myna.pz.2023' }).then(data => data.forEach(dat => console.log(dat.members)))


http.listen(port, () => { })