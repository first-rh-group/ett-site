const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: '10.0.0.96',
    user: 'dtc_saga',
    password: '179856',
    database: 'grupofir_firstrh3'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados');
});

app.get('/faq', (req, res) => {
    const sql = 'SELECT * FROM faq';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.post('/faq', (req, res) => {
    const { pergunta, resposta, posicao } = req.body;
    const sql = 'INSERT INTO faq (pergunta, resposta, posicao) VALUES (?, ?, ?)';
    db.query(sql, [pergunta, resposta, posicao], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.put('/faq/:id', (req, res) => {
    const { pergunta, resposta, posicao } = req.body;
    const sql = 'UPDATE faq SET pergunta = ?, resposta = ?, posicao = ? WHERE id = ?';
    db.query(sql, [pergunta, resposta, posicao, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.delete('/faq/:id', (req, res) => {
    const sql = 'DELETE FROM faq WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});