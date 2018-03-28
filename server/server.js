const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');

const port = process.env.PORT || 3000;
const app =express();
var server = http.createServer(app);
var io =socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("New User connected");
    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });
});


server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
