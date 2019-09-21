'use strict';

const express = require('express');
const ChatRouter = require('./chat.router');
const Router = express.Router();

Router.use('/chat', ChatRouter);

module.exports = Router;
