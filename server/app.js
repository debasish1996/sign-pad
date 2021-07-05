const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 2000;

app.use(express.static(path.join(__dirname, '../dist/signature-demo')));


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT);
