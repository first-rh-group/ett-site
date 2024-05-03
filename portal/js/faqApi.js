"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
app.use(bodyParser.json());
var db = mysql.createConnection({
  host: '10.0.0.96',
  user: 'dtc_saga',
  password: '179856',
  database: 'grupofir_firstrh3'
});
db.connect(function (err) {
  if (err) throw err;
  console.log('Conectado ao banco de dados');
});
app.get('/faq', function (req, res) {
  var sql = 'SELECT * FROM faq';
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
app.post('/faq', function (req, res) {
  var _req$body = req.body,
    pergunta = _req$body.pergunta,
    resposta = _req$body.resposta,
    posicao = _req$body.posicao;
  var sql = 'INSERT INTO faq (pergunta, resposta, posicao) VALUES (?, ?, ?)';
  db.query(sql, [pergunta, resposta, posicao], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
app.put('/faq/:id', function (req, res) {
  var _req$body2 = req.body,
    pergunta = _req$body2.pergunta,
    resposta = _req$body2.resposta,
    posicao = _req$body2.posicao;
  var sql = 'UPDATE faq SET pergunta = ?, resposta = ?, posicao = ? WHERE id = ?';
  db.query(sql, [pergunta, resposta, posicao, req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
app["delete"]('/faq/:id', function (req, res) {
  var sql = 'DELETE FROM faq WHERE id = ?';
  db.query(sql, [req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
app.listen(3000, function () {
  console.log('Servidor rodando na porta 3000');
});