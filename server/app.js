const express = require('express');
require('dotenv').config();
const path = require('path');
const { connectPostgres } = require('./DB/connectPostgres.js');
const { syncModel } = require('./DB/modelLink.js');
const linksRouter = require('./router/linksRouter.js');
const indexRouter = require('./router/indexRouter.js');

const app = express();

connectPostgres();
syncModel();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve('../client/build/')));

app.use('/links', linksRouter);
app.use('/', indexRouter);
app.get('*', (req, res) => {
  res.status(404).end();
});

module.exports = app;
