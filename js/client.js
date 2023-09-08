const socket = io("http://localhost:8000",{transports:["WebSocket"]});

const form = document.getElementById('send-container');
const messageInput =  document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");


const username = prompt("Enter you name to join");
socket.emit('new-user-joined', username);
