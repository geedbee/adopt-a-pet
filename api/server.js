const express = require('express');
const server = express();

server.use('/*', (req, res, next) => {
    res.status(200).json({message: 'Hello World!'});
})

module.exports = server;
