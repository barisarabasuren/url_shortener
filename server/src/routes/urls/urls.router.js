const express = require('express');

const { httpGetAllUrls, httpHandleNewUrl } = require('./urls.controller')

const urlsRouter = express.Router();

urlsRouter.get('/urls', httpGetAllUrls);
urlsRouter.put('/urls', httpHandleNewUrl);

module.exports = urlsRouter