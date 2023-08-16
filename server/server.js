const express = require('express');
const http = require('http');
const cors = require('cors'); // Import the cors package
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// Use the cors middleware for Express
app.use(cors());

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000', // Replace with your frontend URL
        methods: ['GET', 'POST'], // Specify the allowed HTTP methods
        credentials: true, // Allow credentials (cookies, etc.)
    },
});

io.on('connection', (socket) => {
    console.log('A user connected');
    // Handle socket events here
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
