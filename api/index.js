require('dotenv').config();
const { request } = require('express');
const express = require('express');
const server = express();
const morgan = require('morgan');
const {PORT} = process.env;
const routes = require('./src/routes/index.js')
const {conn} = require('./src/models/index.js')


server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

server.use('/api', routes)


conn.sync({force:true}). then(()=> {
  console.log('Database connected')
  server.listen(PORT, ()=>{
    console.log(`Listening at ${PORT}`)
  });
});
