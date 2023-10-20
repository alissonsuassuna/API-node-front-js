const express = require('express');
const cors = require('cors')
const mysql = require('mysql');

const app = express();
app.use(cors())
const port = 3000;

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'db-login'
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota GET para listar dados em JSON
app.get('/listar-clients', (req, res) => {
  const sql = 'SELECT * FROM clients';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
