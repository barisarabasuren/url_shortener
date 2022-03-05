const express = require('express');
const urlsRouter = require('./routes/urls/urls.router')
const shortUrlsRouter = require('./routes/shortUrls/shortUrls.router')
const cors = require('cors')

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.static('404NotFound'))
app.use(express.json());
app.use(urlsRouter);
app.use(shortUrlsRouter)

module.exports =  app;