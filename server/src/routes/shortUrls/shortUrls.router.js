const express = require('express');
const httpHandleShortenedUrl = require('./shortUrls.controller')

const shortUrlsRouter = express.Router();

shortUrlsRouter.get('/:shortened_url', httpHandleShortenedUrl)

module.exports = shortUrlsRouter;