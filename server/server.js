const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true,
    },
});

io.on('connection', (socket) => {
    socket.on('join', (username) => {
        socket.broadcast.emit('welcome', `${username} has joined the chat`);
    })

    socket.on('message', ({username, message}) => {
        socket.broadcast.emit('message', {username, message});
    })
});

server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
});
