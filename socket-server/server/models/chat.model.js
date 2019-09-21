'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    message: {
      type: String
    },
    sender: {
      type: String
    }
  },
  {
    timestamp: true
  }
);

let Chat = new mongoose.model('chat', chatSchema);

module.exports = Chat;