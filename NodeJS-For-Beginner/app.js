// const express = require('express')
          // (or)
// in package.json, we have to add type property for using this statement.
import express from 'express';
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}...`)
})