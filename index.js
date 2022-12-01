import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile('/index.html', {root: '.'});
})

io.on("connection", (socket) => {
    console.log(socket.id+' is connected');
    socket.on('user', (user) => {
        socket.emit('maj', user);
    })
});

httpServer.listen(PORT);