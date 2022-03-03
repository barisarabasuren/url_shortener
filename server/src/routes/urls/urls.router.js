const express = require('express');

const { getAllUrls } = require('./urls.controller')

const urlsRouter = express.Router();

urlsRouter.get('/urls', getAllUrls);

module.exports = urlsRouter