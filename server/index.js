const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Create connection
const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Han0998!',
   database: 'todolistdb'
});

// Now connect
db.connect((err) => {
   if (err) {
      throw err
   }
   console.log("MySql Connected.... :)")
})

app.listen(3001, () => {
   console.log("SERVER IS RUNNING");
});

app.get('/', (req, res) => {
   res.send("Hello World!")
});

app.get('/tasks', (req, res) => {
   let sql = 'SELECT * from tasks';
   db.query(sql, (err, result) => {
      if (err) {
         throw err
      } else {
         res.send(result)
      }
   } )
})

app.post('/addtask', (req, res) => {
   // let task = {name: 'postname'};
   console.log(req);
   let task = { name: req.body.taskName };
   console.log(req.body.name);
   let sql = 'INSERT into tasks SET ?';
   db.query(sql, task, (err, result) => {
      if (err) {
         throw err
      }
      console.log(result);
      res.send('Task has been added!');
   });
});