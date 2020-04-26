const http = require('http');
const express = require('express');
const socketio = require('socket.io-client');
const cors = require('cors');

const PORT = process.env.PORT || 5000

const router = require("./router")

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connect', (socket) => {
    console.log("We have new connection.");
    socket.on('disconnect', () => {
        console.log("User had left.");
    })
})


app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}.`));