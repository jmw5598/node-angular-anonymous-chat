'use strict';

const express = require('express');
const ChatController = require('../controllers/chat.controller');
const ChatRouter = express.Router();

ChatRouter.route('/messages')
    .get(ChatController.getChatMessage)

module.exports = ChatRouter;