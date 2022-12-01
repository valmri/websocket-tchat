import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const PORT = 8080;

app.get('/', (req, res) => {
    res.sendFile('/index.html', {root: '.'});
})

io.on("connection", (socket) => {
  console.log('ok')
});

httpServer.listen(3000);