const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

mongoose
  .connect(process.env.DB_STRING)
  .then(() => {
    console.log('Database Connected!');
    app.listen(process.env.PORT, () => {
      console.log('App Connected and running!');
    });
  })
  .catch(() => {
    console.log('Failed to connect');
  });
