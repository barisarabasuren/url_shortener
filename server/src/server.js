const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://barisarabasuren:6OwJUWKvRwDfruX2@urlshortener.idvo3.mongodb.net/url_shortener?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection is ready!')
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})

const startServer = async() => {
    await mongoose.connect(MONGO_URL);

    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}...`)
    });
}

startServer()


