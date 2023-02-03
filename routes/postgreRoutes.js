const { Pool } = require('pg');

let pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'qadam',
    password: '200320052010meir',
    port: 5432,
  });
  

exports.infoGet = function (req, res) {
    try {
      pool.connect(async (error, client, release) => {
        let response = await client.query(`SELECT * FROM courses`);
        release();
        res.json(response.rows);
      });
    } catch (error) {
      console.log(error);
    }
  }

exports.main = function (req, res) {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <form action="/info/videos" method="GET">
            <input type="submit" value="VIDEOS">
        </form>
        <form action="/info/get" method="GET">
            <input type="submit" value="GET">
        </form>
        <form action="/info/add" method="post" >
            <label for="add">Add:</label>
            <input type="text" name="add" id="add" placeholder="Name">
            <input type="text" name="addlevel" id="addlevel" placeholder="Difficulty">
            <input type="submit" value="Add">
        </form>
        <form action="/info/delete" method="post">
            <label for="delete">Delete:</label>
            <input type="text" name="delete" id="delete" placeholder="Id">
            <input type="submit" value="Delete">
        </form>
        <form action="/info/update" method="post">
            <label for="oldValue">Id of course:</label>
            <input type="text" name="oldValue" id="oldValue" placeholder="Id">
            <label for="newValue">Update:</label>
            <input type="text" name="newValue" id="newValue" placeholder="Name">
            <input type="submit" value="Update">
        </form>
    </body>
    </html>`)
  }

  exports.infoAdd = function (req, res) {
    try {
      pool.connect(async (error, client, release) => {
        let response = await client.query(`INSERT INTO courses(name, level) VALUES ('${req.body.add}','${req.body.addlevel}')`);
        release();
        res.redirect('/info/get');
      });
    } catch (error) {
      console.log(error);
    }
  }

  exports.infoDelete = function (req, res) {
    try {
      pool.connect(async (error, client, release) => {
        let response = await client.query(`DELETE FROM courses WHERE id  = '${req.body.delete}'`);
        release();
        res.redirect('/info/get');
      });
    } catch (error) {
      console.log(error);
    }
  }

  exports.infoUpdate = function (req, res) {
    try {
      pool.connect(async (error, client, release) => {
        let response = await client.query(`UPDATE courses SET name = '${req.body.newValue}' WHERE id = '${req.body.oldValue}'`);
        release();
        res.redirect('/info/get');
      });
    } catch (error) {
      console.log(error);
    }
  }