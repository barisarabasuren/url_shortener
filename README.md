# url_shortener

This repository contains two components:
* the **frontend**, which provides a client for url shortenings (Build file is served on root of server)
* the **server**, which provides the API to manage url shortening([Deployed on Heroku](https://whispering-mesa-59217.herokuapp.com/)

# Architecture
### High-Level Overview
![Architecture](./images/architecture.jpeg?raw=true)

# Backend

### Techstack
The entire backend of url shortener is written using:
- [node.js](https://nodejs.org/en/)
- [MongoDb Atlas](hhttps://www.mongodb.com/atlas/database/)


Extra libraries used were:
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)

### Installation
Requirements:
* [node.js](https://nodejs.org/en/)

To run the backend service you have to clone the repository:
```zsh
git clone https://github.com/barisarabasuren/url_shortener
cd ./url_shortener
npm run install
npm run start
```

Note that in order to create urls on localhost, change API_URL on ./client/src/hooks/requests.tsx.

# Frontend

### Techstack
The entire backend of url shortener is written using:
- [create-reat-app](https://create-react-app.dev/)
- [TypeScript](https://github.com/microsoft/TypeScript)


Extra libraries used were:
- [Ant Design](https://ant.design/)


### Installation

To run the frontend service you have to clone the repository:
```zsh
git clone https://github.com/barisarabasuren/url_shortener
cd ./url_shortener
npm run install-client
npm run client
```

Note that in order to access short urls on localhost from FE , change API_URL on ./client/src/hooks/requests.tsx.

