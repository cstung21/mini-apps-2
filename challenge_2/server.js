const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const axios = require('axios');

app.use('/', express.static(path.join(__dirname, '/public')));

app.get('/coindesk', (req, res) => {
  const { start, end } = req.query;
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
  .then(response => res.status(200).send(response.data.bpi))
  .catch(error => res.status(500).send(error));
});

app.listen(PORT, () => console.log(`Connected! Listening on port ${PORT}...`));

