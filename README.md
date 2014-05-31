### Simple Chat in node.js and bootstrap (with socket.io)

A simple chat just to play with socket.io and the express framework. Hope you like it :)

## Install
Install node.js and then install express and socket.io with `npm install socket.io -g` and `npm install express -g` .

## Usage
Change the line `var socket = io.connect("http://localhost:8080");` from the index.html to whatever your ip or domain is, if you want to try it in something else other than localhost. For running it locally and as a standalone, type `node app.js` and visit the http://localhost:8080 or whatever your domain or ip is.