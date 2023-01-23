const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Test for minikube</h1>
    <p>/ : Open the site</p>
    <p>/err : process top (get error)</p>
    `);
});

app.get('/err', (req, res) => {
  process.exit(1);
});

app.listen(8080);
