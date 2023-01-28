// const http = require('http');
// const express = require('express');
// const morgan = require('morgan');
// const {Pool} = require('pg');
// require('dotenv').config;

// const app = express()

// const port = 3000;

// app.use(morgan('common'))

// app.listen(port, (
//     console.log(`Server started on port ${port}`)
// ))

const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
    res.send('Hello, Abdulla!');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})