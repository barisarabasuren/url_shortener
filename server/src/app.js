const express = require('express');
const urlsRouter = require('./routes/urls/urls.router')
const cors = require('cors')

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())
app.use(urlsRouter)

module.exports =  app;