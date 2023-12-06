const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mean', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('O banco de dados está conectado!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados! ' + err);
    process.exit(1); // Encerra o aplicativo se não for possível conectar ao banco de dados
  });

const produtoRoute = require('./routes/Produto');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/produto', produtoRoute);

app.get('/', (req, res) => {
  res.send('Por favor, nos conte sobre o produto');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
