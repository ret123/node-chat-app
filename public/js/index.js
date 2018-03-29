var socket = io();
socket.on('connect', () => {
    console.log('Connected to the Server');

});
socket.emit('createMessage', {
    from: 'rathish',
    text: 'hello from client'
});
socket.on('disconnect', () => {
    console.log('Disconnected from Server');
});
socket.on('newMessage', (message) => {
    console.log('newMessage', message);
});