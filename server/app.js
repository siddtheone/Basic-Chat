const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
// const index = require("./routes/index");
const app = express();
// app.use(index);
const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on port ${port}`));

const io = socketIo(server);

io.on('connection', function(socket){
  console.log('---------------------------------------a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('message', m => {
    console.log(m);
    socket.broadcast.emit('message', m);
  });
});
