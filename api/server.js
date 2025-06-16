const express = require('express');
const cors = require('cors');
const Pet = require('./pet-model');

const server = express();
server.use(cors());

server.get('/api/pets', async (req, res, next) => {
    try {
        const pets = await Pet.find();
        res.json(pets); //defaults to 200 ok
    }
    catch(err){
        next(err);
    }
});

//put catch all at the end- order matters
server.use('/*', (req, res, next) => {
    next({message: 'not found!', status: 404})
})

server.use((err, req, res, next) => {
    const {message, status = 500}  = err;
    console.log(message);
    res.status(status).json({message});
});

module.exports = server;
