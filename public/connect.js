const socket = io.connect('http://192.168.178.36:4000');
let username = ''; // Initialize the username variable

function getDate(currentDate = new Date()) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formattedDate;
}

$('#message-form').submit(function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const message = $('#message-input').val();
    username = $('#username-input').val(); // Update the username when sending a message
    // Send the message along with the updated username
    socket.emit('chat message', { text: message, username: username });
    $('#message-input').val('');
    return false;
});

socket.on('chat message', function (msg) {
    // msg should be an object like { text: "Hello", username: "user1" }
    const datetime = getDate();
    const isCurrentUser = msg.username === username;
    const messageClass = isCurrentUser ? 'message-right' : 'message-left';
    
    const messageHtml = `<li class="${messageClass}">
        <span class='sender'><i class="fa-solid fa-user"></i>   ${msg.username}</span> ${msg.text} 
        <span class='datetime'>${datetime}</span>
    </li>`;

    $('#message-container').append(messageHtml);
});
