const express = require('express');
const path = require('path')
const urlsRouter = require('./routes/urls/urls.router')
const shortUrlsRouter = require('./routes/shortUrls/shortUrls.router')
const cors = require('cors')

const app = express();

app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://localhost:8000'
    ]
}))

app.use(express.static(path.join(__dirname,'..', 'public',)))
app.use(express.json());
app.use(urlsRouter);
app.use(shortUrlsRouter)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports =  app;