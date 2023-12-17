const express = require('express');
const http = require('http'); // Import the HTTP module
const path = require('path');
const cors = require('cors');
const socketIo = require('socket.io'); // Import socket.io

const app = express();
const server = http.createServer(app); // Create an HTTP server
const io = socketIo(server); // Create a socket.io server

const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());

 // Serve static files from the current directory
 app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});


// Socket.io code for live chat
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle incoming chat messages
    socket.on('chat message', (msg) => {
        console.log(`Message: ${msg}`);
        // Broadcast the message to all connected clients, including the sender
        io.emit('chat message', msg);
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
    
    // Log when a user connects and disconnects
    socket.on('connect', () => {
        console.log('User connected');
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
