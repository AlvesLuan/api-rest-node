const mysql = require('mysql2');

//configuraçao da conexao com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', //substituir pelo seu usuario
    password: 'senha', //substituir pela sua senhha
    database: 'exemplo' //substituir pelo nome do banco
});

const items = {
    "1": {id:1, nome:"Caneta", valor:"12"},
    "2": {id:2, nome:"Papel", valor:"13"},
    "3": {id:3, nome:"Lápis", valor:"14"}
}

const sequence = {
    _id: 4,
    get id(){
        return this._id++;
    }
}

connection.query('SELECT * FROM usuario', (err, results) => {
    if(err){
        console.error('Erro ao realizar consulta: ',err);
        return;
    }
    console.log('Resultados: ', results);
});

const nome = 'Caderno';
const valor = '23';
connection.query(
    'INSERT INTO usuarios (nome, email) VALUES (?, ?)',
    [nome, valor],
    (err, results) => {
        if(err){
            console.error('Erro ao inserir dados: ',err);
            return;
        }
        console.log('Registro inserido com sucesso! ID: ', results.insertId);
    });

    //connection.end


function listItems(){
    return Object.values(items);
}

function createItem(item){
    items.id = sequence.id;
    items[item.id] = item;
    return item;
}

function getItem(id){
    return items[id];
}

module.exports = {listItems, createItem, getItem};
