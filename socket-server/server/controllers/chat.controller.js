'use strict';

class ChatController {
  constructor() {}

  getChatMessage(req, res) {
    res.status(200).send("Ok");
  }

  

}

module.exports = new ChatController();