const express = require('express')
const app = express()
const port = 7000
const http = require('http').Server(app)
const cors = require('cors')
const cookieParser = require('cookie-parser')
app.use(cors())
app.use(express.json());
app.use('/user', require('./routes/user'))
app.use('/proposition', require('./routes/proposition'))

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/user', require('./routes/user'))
app.use('/refresh', require('./routes/refresh'))
app.use('/logout', require('./routes/logout'))

const mongoose = require('mongoose')
//replace to env variables on deploy
mongoose.connect("mongodb+srv://UserDB:UserDBPassword@maksymcluster.ozlrsuf.mongodb.net/?retryWrites=true&w=majority").then(console.log("Successful"))
    .catch(console.log)

const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:5173",
    },
});

io.use((socket, next) => {
    const username = socket.handshake.auth.username;
    if (!username) {
        return next(new Error("invalid username"));
    }
    socket.username = username;
    next();
});

io.on("connection", (socket) => {
    // fetch existing users
    const users = [];
    for (let [id, socket] of io.of("/").sockets) {
        users.push({
            userID: id,
            username: socket.username,
        });
    }
    socket.emit("users", users);

    // notify existing users
    socket.broadcast.emit("user connected", {
        userID: socket.id,
        username: socket.username,
    });

    // forward the private message to the right recipient
    socket.on("private message", ({ content, to }) => {
        socket.to(to).emit("private message", {
            content,
            from: socket.id,
        });
        console.log(content, to, socket.id);
    });

    // notify users upon disconnection
    socket.on("disconnect", () => {
        socket.broadcast.emit("user disconnected", socket.id);
    });
});


http.listen(port, () => { })