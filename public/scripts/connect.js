const socket = io.connect();
let username = '';
function getDate(currentDate = new Date()) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formattedDate;
}
const bannedWords = ['badword1', 'badword2', 'badword3'];

socket.on('user count', function(count) {
    try {
        count = count / 2;
        $('#user-count').text(count + ' users online');
    } catch (error) {
        console.error('error ne llogaritje te userit:', error);
        throw error; 
    }
});


$('#message-form').submit(function (e) {
    e.preventDefault(); 

    const message = $('#message-input').val();
    $.get('/getsession', function(data) {
        if (data.isLoggedIn) {
            username = data.username;
            socket.emit('chat message', { text: message, username: username });
            $('#message-input').val('');
        } else {
            window.location.href = '/login'; // Redirect if the user is not logged in
        }
    });
    return false;
});
socket.on('chat message', function (msg) {
    const datetime = getDate();
    const isCurrentUser = msg.username === username;
    const messageClass = isCurrentUser ? 'message-right' : 'message-left';

    const filteredMessage = filterMessage(msg.text);

    if (filteredMessage) {
        const imageUrl = extractImageUrl(filteredMessage);
        let messageContent = filteredMessage;

        if (imageUrl) {
            if (filteredMessage.trim() === imageUrl) {
                messageContent = `<img src="${imageUrl}" alt="Image" style="max-width: 200px; max-height: 200px;">`;
            } else {
                messageContent += `<br><img src="${imageUrl}" alt="Image" style="max-width: 200px; max-height: 200px;">`;
            }
        }

        const messageHtml = `<li class="${messageClass}">
            <span class='sender'><i class="fa-solid fa-user"></i> ${msg.username}</span> 
            ${messageContent} 
            <span class='datetime'>${datetime}</span>
        </li>`;

        $('#message-container').append(messageHtml);
        $('#message-container').scrollTop($('#message-container')[0].scrollHeight);
    }
});

function filterMessage(message) {
    try {

        const words = message.split(' ');
        const filteredWords = words.filter(word => !bannedWords.includes(word.toLowerCase()));
        return filteredWords.join(' ');
    } catch (error) {
        console.error('gabim ne gjetjen e fjales te ndaluar:', error);
        throw error; 
    }
}
function appendImageToChat(imageData, username) {
    const datetime = getDate();

    const messageClass = 'message-left';

    const imageHtml = `<li class="${messageClass}">
        <span class='sender'><i class="fa-solid fa-user"></i> Hyj</span> 
        <img src="${imageData}" alt="Image" style="max-width: 200px; max-height: 200px;">
        <span class='datetime'>${datetime}</span>
    </li>`;

    $('#message-container').append(imageHtml);
    $('#message-container').scrollTop($('#message-container')[0].scrollHeight);
}

socket.on('received image', function (data) {
    console.log("I'm here");
    const imageData = data.imageData;
    const username = data.username; 
    appendImageToChat(imageData, username);
});

function extractImageUrl(text) {
    const urlRegex = /(https?:\/\/\S+\.(?:jpg|jpeg|png|gif))/i;
    const matches = text.match (urlRegex);
    return matches ? matches[0] : null;
}


/////////////////////////////////// youtube player code //////////////////////////////////////
var player; 
$(document).ready(function() {
    const socket = io.connect();


    function initPlayer(videoId) {
        try {
            player = new YT.Player('youtube-player', {
                height: '1',
                width: '1',
                videoId: videoId,
                playerVars: {
                    'autoplay': 1,
                    'controls': 1,
                }
            });
        } catch (error) {
            console.error('YouTube player initialization error:', error);
        }
    }

    $('#youtube-form').submit(function(e) {
        e.preventDefault();
        var videoUrl = $('#youtube-link-input').val();
        var videoId = extractVideoID(videoUrl);
        if (videoId) {
            socket.emit('new youtube link', videoId);
        }
        $('#youtube-link-input').val('');
    });

    socket.on('play youtube audio', function(videoId) {
        if (player && player.loadVideoById) {
            player.loadVideoById(videoId);
        } else {
            initPlayer(videoId);
        }
    });
});

function extractVideoID(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[2].length == 11) ? match[2] : null;
}

function muteAudio() {
    if (player && player.mute) {
        player.setVolume(0)}
}

function increaseAudio() {
    try {
        if (player && player.getVolume && player.setVolume) {
            var currentVolume = player.getVolume();
            var newVolume = currentVolume + 10;
            newVolume = (newVolume > 100) ? 100 : newVolume;

            player.setVolume(newVolume);
        }
    } catch (error) {
        console.error('YouTube player volume adjustment error:', error);
    }
}


function decreaseAudio() {
    try {
        if (player && player.getVolume && player.setVolume) {
            var currentVolume = player.getVolume();
            var newVolume = currentVolume - 10;
            newVolume = (newVolume < 0) ? 0 : newVolume;

            player.setVolume(newVolume);
        }
    } catch (error) {
        console.error('YouTube player volume adjustment error:', error);
    }
}
const canvas = document.getElementById("drawingCanvas");
const context = canvas.getContext("2d");
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Event listeners for mouse interactions
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", endDrawing);
canvas.addEventListener("mouseout", endDrawing);

document.getElementById("clearButton").addEventListener("click", clearCanvas);

document.getElementById("sendButton").addEventListener("click", sendImage);
function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
    if (!isDrawing) return;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function endDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}


function sendImage() {
    const imageData = canvas.toDataURL("image/png");
    socket.emit('send image', { imageData: imageData });
    clearCanvas();
}
