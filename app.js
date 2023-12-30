const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 4000;
let users = {};
let userCount = 0; 
////////////////////////////////// sign up 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }


    if (users[username]) {
        return res.status(400).json({ success: false, message: 'User already exists with this username' });
    }

    users[username] = { username, password, email };

    // Success response
    res.status(200).json({ success: true, message: 'Signup successful' });
});



//////////////////////////// login method

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username].password === password) {
        res.status(200).json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Unauthorized' });
    }
});

//////////////////////////

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});
// this serves the login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
// this serves the chat page
app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

io.on('connection', (socket) => {
    userCount++; 
    io.emit('user count', userCount); 

    console.log('A user connected');

    socket.on('chat message', (msg) => {
        console.log('Message:', JSON.stringify(msg));
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        userCount--; 
        io.emit('user count', userCount); 
        console.log('User disconnected');
    });
    socket.on('new youtube link', (videoId) => {
        io.emit('play youtube audio', videoId);
    });
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


