class ConnectionMapping {

  constructor() {
    this.rooms = {};
  }

  join(roomId, user) {
    if (this.rooms.hasOwnProperty(roomId)) {
      this.rooms[roomId].push(user);
    } else {
      this.rooms[roomId] = [];
      this.rooms[roomId].push(user);
    }
  }

  leave(roomId, user) {
    if (this.rooms.hasOwnProperty(roomId)) {
      this.rooms[roomId] = this.rooms[roomId].filter(e => e.id !== user.id);
      
      if (this.rooms[roomId].length <= 0)
        delete this.rooms[roomId];
    }
  }

  getUsers(roomId) {
    if (this.rooms.hasOwnProperty(roomId))
      return [...this.rooms[roomId]];
    else
      return [];
  }

}

module.exports = new ConnectionMapping();