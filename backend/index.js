const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'root',
  host: '127.0.0.1',
  database: 'slacklite',
  password: 'root',
  port: 5432,
})

app.use(cors());
app.use(bodyParser.json())

app.post('/login', (req, res) => {
  pool.query('SELECT * FROM table_user WHERE benutzername = $1', [req.body.username], (error, results) => {
    if (error) {
      throw error
    }
    if(results.rowCount === 0){
      res.status(200).send({
        token: "flase",
        response:"Username not found."
      })
    } else if (results.rows[0].password != req.body.password) {
      res.status(200).send({
        token: "flase",
        response:"Password is incorrect."
      })
    } else {
      res.status(200).send({
        token:"test123"
      })
    }
  })
});

app.post('/register', (req, res) => {
  pool.query('SELECT * FROM table_user WHERE benutzername = $1', [req.body.username], (error, results) => {
    console.log(results.rowCount)
    if(results.rowCount === 0){
      pool.query('INSERT INTO table_user (benutzername, password) VALUES ($1, $2)', 
        [req.body.username, req.body.password], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send({
          token: 'test123'
        });
      })
    } else {
      res.status(200).send({
        token: "flase",
        response:"Username alerady taken."
      })
    }
  })
});

app.post('/channel', (req, res) => {
  pool.query('SELECT * FROM channel WHERE name = $1', [req.body.channelName], (error, results) => {
    console.log(results.rowCount)
    if(results.rowCount === 0){
      pool.query('INSERT INTO channel (name) VALUES ($1)', 
        [req.body.channelName], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send({
          token:true
        });
      })
    } else {
      res.status(200).send({
        token:false,
        response:"Channel name already taken."
      })
    }
  })
})

app.get('/channel', (req, res) => {
  pool.query('SELECT * FROM channel', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(results.rows)
    }
  )
})


app.listen(5000, () => console.log('API is running on http://localhost:5000/'));

