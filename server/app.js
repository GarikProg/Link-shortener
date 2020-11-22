const express = require('express');

const { getLinks, createLink, updateCounter } = require('./fileStorage.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/links', (req, res) => {
  res.json(getLinks());
});

app.post('/links', (req, res) => {
  res.json(createLink(req.body.longLink));
});

app.get('/:id', (req, res) => {
  res.json(updateCounter(req.params.id));
});

const port = process.env.PORT || 3001;
app.listen(port, console.log(`You listen port ${port}`));
