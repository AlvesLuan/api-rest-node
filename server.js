port = 3003;

const express = require('express');
const bd = require('./bancoDeDados')

const app = express();

app.use(express.json());

app.listen(port, ()=>{
    console.log(`Servidor Iniciado na porta: ${port}`); 
    /*console.log('Servidor Iniciado na porta: ',port); */
})

app.get('/items', (request, response, next) =>{
    response.send(bd.listItems());


})
