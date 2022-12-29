import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const PORT = 3000;

app.use(express.static('app'));

app.get('/', (req, res) => {
    res.sendFile('/index.html');
})

io.on("connection", (socket) => {
    console.log(socket.id+' is connected');
    socket.on('user', (user) => {
        console.log('SO : ', user);
        io.sockets.emit('socket', user);
    })
    
});

httpServer.listen(PORT);