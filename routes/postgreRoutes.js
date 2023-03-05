
const path = require('path');
const { Pool } = require('pg');

let pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'nodejs',
    password: '200320052010',
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
  res.sendFile(path.join(__dirname,'..','main.html'));
  }

exports.infoAdd = function (req, res) {
    try {
      pool.connect(async (error, client, release) => {
        let response = await client.query(`INSERT INTO courses(name, difficulty) VALUES ('${req.body.add}','${req.body.addlevel}')`);
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