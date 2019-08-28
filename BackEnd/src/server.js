const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); //Cors permite que eu acesse as informações do backend de qualquer lugar

const routes = require('./routes')
const server = express(); //server recebe acesso as tratativas do express
//  GET, POST, PUT, DELETE
// GET    = quando queremos buscar alguma informação da nossa api
// POST   = quando queremos criar registro ou entidade
// PUT    = quando queremos editar
// DELETE = deletar

mongoose.connect('mongodb+srv://tindev:tindev@cluster0-uuqw8.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
server.use(cors());
server.use(express.json()); //Informando para express que vamos usar json via post
server.use(routes);

server.listen(3333); //indentificando a porta para o server