const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const {generateMessage} = require("./utils/message");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on("connection", (socket) => {
  console.log("New user connected");

  socket.emit("newMessage", generateMessage("Admin", "Welcome to the chat app"));

  socket.broadcast.emit("newMessage", generateMessage("Admin", "New user connected"));

  socket.on("createMessage", (message) => {
    console.log("createMessage", message);
    io.emit("newMessage", generateMessage(message.from, message.text));
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});