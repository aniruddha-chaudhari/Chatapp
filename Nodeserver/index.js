
// noder server for socket io
const { Socket } = require('socket.io');

const io = require('socket.io')(8000)

const users = {};

io.on('connection', socket =>{
    socket.on('new-user-joined',username =>{
        console.log("New User" , username);
        users[socket.id] =username;
        socket.broadcast.emit('user-joined',username);
    });
    socket.on('send',message =>{
        socket.broadcast.emit('receive' , {message :message ,username : users[socket.id]})
    });
})