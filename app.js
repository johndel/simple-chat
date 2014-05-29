var socket = require("socket.io"),
    express = require("express"),
    http = require("http");

// Server & socket.io init
var app = express();
app.use(express.static(__dirname + '/public'));
var server = app.listen(8080);
var io = socket.listen(server);


// Express
app.get("/", function(request, response) {
  console.log("Someone came.");
  response.sendfile(__dirname + "/index.html");
});


// Socket.io
io.sockets.on("connection", function(client) {
  // Show nickname
  client.on("join", function(name) {
    console.log("Client enter nickname: " + name);
  });

  // Get and send the message
  client.on("messages", function(data) {
    console.log(data);
    client.broadcast.emit("messages", data);
  });
});