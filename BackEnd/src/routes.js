const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();


routes.post('/devs', DevController.store);

module.exports = routes; // usado para expor a variavel para outros arquivos acessarem