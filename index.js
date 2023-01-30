const http = require('http');
const express = require('express');
const morgan = require('morgan');
const {Pool} = require('pg');
const { release } = require('os');
const { log } = require('console');
require('dotenv').config;

let pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'qadam',
  password: '200320052010meir',
  port: 5432,
});

const app = express()

const port = 3000;

app.use(morgan('common'))
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get('/', (req, res)=>{
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <form action="/info/get" method="GET">
          <input type="summit" value="GET">
      </form>
      <form action="/info/add" method="post">
          <label for="add">Add:</label>
          <input type="text" name="add" id="add">
          <input type="submit" value="Add">
      </form>
      <form action="/info/delete" method="post">
          <label for="delete">Delete:</label>
          <input type="text" name="delete" id="delete">
          <input type="submit" value="Delete">
      </form>
      <form action="/info/update" method="post">
          <label for="oldValue">Old Value:</label>
          <input type="text" name="oldValue" id="oldValue">
          <label for="newValue">Update:</label>
          <input type="text" name="newValue" id="newValue">
          <input type="submit" value="Update">
      </form>
  </body>
  </html>`)
})

app.get('/info/get', (req, res)=>{
  try {
    pool.connect(async (error, client, release) => {
        let response = await client.query(`SELECT * FROM users`);
        release();
        res.json(response.rows);
    });
  } catch (error) {
    console.log(error);
  }
})

app.post('/info/add', (req, res)=>{
  try {
    pool.connect(async (error, client, release) => {
        let response = await client.query(`INSERT INTO courses VALUES {'${req.body.add}'}`);
        release();
        res.redirect('/info/get');
    });
  } catch (error) {
    console.log(error);
  }
})

app.listen(port, (
    console.log(`Server started on port ${port}`)
))