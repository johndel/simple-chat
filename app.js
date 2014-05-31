var socket = require("socket.io"),
    express = require("express"),
    http = require("http");
var users = {};

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

  // Show and send list of nicknames
  client.on("join", function(name) {
    users[client.id] = name;
    console.log(name +" joined. ");
    io.emit("update-users", users);
  });

  // Get and send the message
  client.on("messages", function(data) {
    console.log(data);
    client.broadcast.emit("messages", data);
  });

  client.on("disconnect", function(){
    client.emit("update", users[client.id] + " has left the server.");
    delete users[client.id];
    io.emit("update-users", users);
  });
});