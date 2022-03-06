const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://barisarabasuren:6OwJUWKvRwDfruX2@urlshortener.idvo3.mongodb.net/url_shortener?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
    console.log('MongoDB connection is ready!')
});

mongoose.connection.on('error', (err) => {
    console.error(err)
});

const mongoConnect = async () => {
    await mongoose.connect(MONGO_URL);
}

const mongoDisconnect = async () => {
    await mongoose.disconnect()
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}