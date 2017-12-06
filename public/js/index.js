const socket = io();

socket.on("connect", function () {
  console.log("Connected to server");

  socket.emit("createMessage", {
    from: "Adam",
    text: "Yo! Just testing this thing!"
  });
});

socket.on("newMessage", function(message) {
  console.log("New Message", message);
});

socket.on("disconnect", function () {
  console.log("Disconnected from server.");
});