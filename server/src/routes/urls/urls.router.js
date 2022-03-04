const express = require('express');

const { httpGetAllUrls, httphandleNewUrl } = require('./urls.controller')

const urlsRouter = express.Router();

urlsRouter.get('/urls', httpGetAllUrls);
urlsRouter.put('/urls', httphandleNewUrl);

module.exports = urlsRouter