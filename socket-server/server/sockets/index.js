'use strict';

const io = require('socket.io');
const ConnectionMapping = require('./connection-mapping');

class SocketServer {

  constructor() {
    this.users = [];
  }

  setup(http) {
    this.socket = io(http);
    this.rooms = ConnectionMapping;
  }

  start() {
    this.socket.on('connection', socket => {
      const room = socket.handshake.query.room;
      const user = JSON.parse(socket.handshake.query.user);
      
      socket.join(room);
      this.rooms.join(room, user);

      const users = this.rooms.getUsers(room);
      
      socket.broadcast.to(room).emit('user-list', users);
      socket.emit('user-list', users);

      socket.on('message', message => {
        socket.broadcast.to(room).emit('received', message);
        socket.emit('received', message);
      });

      socket.on('disconnect', message => {
        const room = socket.handshake.query.room;
        const user = JSON.parse(socket.handshake.query.user);
        console.log("user leaving", user);
        this.rooms.leave(room, user);

        const users = this.rooms.getUsers(room);
        console.log("new user list", users);
        socket.broadcast.to(room).emit('user-list', users);
      })

    });
  }

}

module.exports = new SocketServer();