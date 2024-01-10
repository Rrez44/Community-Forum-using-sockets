const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const session = require('express-session');
const io = socketIo(server);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 4000;
let users = {};
let userCount = 0; 




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/////////////////////////////// this is the session code, it will create a session for logged users

app.use(session({
    secret: '2514677942', 
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false, 
        maxAge: 1000 * 60 * 60 * 24 
    }
}));


function isAuthenticated(req, res, next) {
    if (req.session.username) {
        return next();
    }
    // if the user is not logged in, redirect them to the login page
    return res.redirect('/login');
}

////////////////////////////////////// signup

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

        req.session.username = username;

        req.session.save(err => {
            if (err) {
                console.error('Session save error:', err);
                res.status(500).json({ success: false, message: 'Internal server error' });

            } else {
                res.status(200).json({ success: true, message: 'Login successful' });
            }
        });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

////////////////////////////////// log out when i make it

app.post('/logout', (req, res) => {
    // destroy the current  session
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                // error case
                console.error('Error destroying session:', err);
                res.status(500).send('Error occurred during logout');
            } else {
                res.status(200).send('Logged out successfully');
            }
        });
    } else {
        res.status(200).send('No session to destroy');
    }
});

//////////////////////////   SITE SERVING HAPPENS HERE  ///////////////////////////

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});
// this serves the login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
// this serves the chat page
app.get('/chat', isAuthenticated,(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

app.get('/home', isAuthenticated,(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
});
app.get('/quiz', isAuthenticated,(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'prep.html'));
});
app.get('/contact', isAuthenticated,(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});
app.get('/shop', isAuthenticated,(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products.html'));
});
app.get('/SingleProduct', isAuthenticated,(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'SingleProduct.html'));
});
app.get('/TableView', isAuthenticated,(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'TableView.html'));
});
/////
app.get('/getsession', (req, res) => {
    if (req.session.username) {
        res.json({ isLoggedIn: true, username: req.session.username });
    } else {
        res.json({ isLoggedIn: false });
    }
});
io.on('connection', (socket) => {
    userCount++;
    io.emit('user count', userCount); 

    console.log('A user connected');


    socket.on('send image', (data) => {
        const imageData = data.imageData;
        io.emit('received image', { imageData: imageData });
    });

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


