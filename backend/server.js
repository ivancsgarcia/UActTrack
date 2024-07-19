const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_uacttrack'
})

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

app.get('/', (req, res) => {
    return res.json("Try API, Working.");
})

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = " INSERT INTO users (`email`, `password`) VALUES (?)"
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json('Error');
        return res.json(data);
    })
})

const port = 8081

app.listen(port, () => {
    console.log("listening to port 8081");
})