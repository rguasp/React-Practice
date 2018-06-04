const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send("Hello");
})

app.get('/login', (req, res) => {
  res.send("Login");
})

// Port
const port =  8000;

app.listen(port, ()=> {
  console.log(`Running on ${port}`);
})

