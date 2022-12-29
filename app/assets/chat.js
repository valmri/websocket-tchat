let socket = io();
let chat = document.getElementById('chat');

envoyer = () => {
    let pseudo = document.getElementById('pseudo').value;
    let message = document.getElementById('message').value;
    
    socket.emit('user', {
        pseudo: pseudo,
        message: message
    });

}

socket.on('socket', (socket) => {
    let msgbody = document.createElement('p');
    msgbody.classList.add('moi')
    let pseudo = document.createElement('strong');
    pseudo.innerText = socket.pseudo+' : ';
    msgbody.appendChild(pseudo);
    let message = document.createElement('span');
    message.innerText = socket.message;
    msgbody.appendChild(message);
    chat.appendChild(msgbody);
});