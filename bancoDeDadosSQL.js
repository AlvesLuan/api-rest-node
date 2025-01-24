const mysql = require('mysql2');

//configuraçao da conexao com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', //substituir pelo seu usuario
    password: '', //substituir pela sua senhha
    database: 'atvd3-luansantos' //substituir pelo nome do banco
});

RTCPeerConnection.connect(err =>{
    if(err){
        console.error('Erro ao conectar ao Banco de Dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida com o banco de dados! ');
});


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

