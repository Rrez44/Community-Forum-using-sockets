const socket = io.connect('http://localhost:4000');
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
socket.on('user count', function(count) {
    $('#user-count').text(count + ' users online');
});

$('#message-form').submit(function (e) {
    e.preventDefault(); 

    const message = $('#message-input').val();
    username = $('#username-input').val(); 
    socket.emit('chat message', { text: message, username: username });
    $('#message-input').val('');
    return false;
});

socket.on('chat message', function (msg) {
    const datetime = getDate();
    const isCurrentUser = msg.username === username;
    const messageClass = isCurrentUser ? 'message-right' : 'message-left';

    const imageUrl = extractImageUrl(msg.text);
    let messageContent = msg.text;

    if (imageUrl) {
        if (msg.text.trim() === imageUrl) {
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
});

function extractImageUrl(text) {
    const urlRegex = /(https?:\/\/\S+\.(?:jpg|jpeg|png|gif))/i;
    const matches = text.match(urlRegex);
    return matches ? matches[0] : null;
}


/////////////////////////////////// youtube player code //////////////////////////////////////
var player; 
$(document).ready(function() {
    const socket = io.connect('http://localhost:4000');



    function initPlayer(videoId) {
        player = new YT.Player('youtube-player', {
            height: '1',
            width: '1',
            videoId: videoId,
            playerVars: {
                'autoplay': 1,
                'controls': 1,
            }
        });
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
    if (player && player.getVolume && player.setVolume) {
        var currentVolume = player.getVolume();
        var newVolume = currentVolume + 10;
        newVolume = (newVolume > 100) ? 100 : newVolume;

        player.setVolume(newVolume);
}
}

function decreaseAudio() {
    if (player && player.getVolume && player.setVolume) {
        var currentVolume = player.getVolume();
        var newVolume = currentVolume - 10;
        newVolume = (newVolume < 0) ? 0 : newVolume;

        player.setVolume(newVolume);
}
}
