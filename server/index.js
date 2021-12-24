const { application } = require('express');
const express = require('express') // 

const app = express();

app.listen(3001, () => {
   console.log("SERVER IS RUNNING");
});

app.get('/', (req, res) => {
   res.send("Hello World!")
});