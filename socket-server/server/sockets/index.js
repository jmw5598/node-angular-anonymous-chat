'use strict';

const io = require('socket.io');
const ConnectionMapping = require('./connection-mapping');

class SocketServer {

  constructor() {
    this.users = [];
  }

  setup(http, config) {
    this.socket = io(http, config);
    this.rooms = ConnectionMapping;
  }

  start() {
    this.socket.on('connection', socket => {
      
      // Connection details
      const room = socket.handshake.query.room;
      const user = JSON.parse(socket.handshake.query.user);
      
      // New user joins room
      socket.join(room);
      this.rooms.join(room, user);

      // Emits new user list to room.
      const users = this.rooms.getUsers(room);
      socket.broadcast.to(room).emit('user-list', users);
      socket.emit('user-list', users);

      // Handles new messages
      socket.on('message', message => {
        socket.broadcast.to(room).emit('received', message);
        socket.emit('received', message);
      });

      // Handles disconnects
      socket.on('disconnect', message => {
        this.rooms.leave(room, user);
        const users = this.rooms.getUsers(room);
        socket.broadcast.to(room).emit('user-list', users);
      })

    });
  }

}

module.exports = new SocketServer();