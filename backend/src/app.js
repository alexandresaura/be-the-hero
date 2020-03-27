const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

/**
 * Utilizar este código em produção para especificar as urls que podem acessar sua API
 *
 * app.use(
 *   cors({
 *     origin: 'http://meuapp.com'
 *   })
 * );
 */

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
