'use strict';

const io = require('socket.io');

class SocketServer {

  constructor() {
    this.users = [];
  }

  setup(http) {
    this.socket = io(http);
  }

  start() {
    this.socket.on('connection', socket => {
      const user = JSON.parse(socket.handshake.query.user);
      const found = this.users.find(u => u.id === user.id);

      if (!found) {
        this.users.push(user);
      }
      
      socket.emit('user-list', this.users);
      socket.broadcast.emit('user-list', this.users);

      socket.on('message', message => {
        socket.emit('received', message);
        socket.broadcast.emit('received', message);
      });

      socket.on('disconnect', message => {
        const user = JSON.parse(socket.handshake.query.user);
        this.users = this.users.filter(u => u.id !== user.id);
        socket.broadcast.emit('user-list', this.users);
        console.log(socket.handshake.query);
      })

    });
  }

}

module.exports = new SocketServer();