const http = require('http');
const app = require('./app');
const { mongoConnect } = require('./services/mongo')

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = async() => {
    await mongoConnect();
    
    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}...`)
    });
}

startServer()


