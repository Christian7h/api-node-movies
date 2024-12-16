//index.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');
const {json} =require('express')

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // Ver las peticiones que llegan al servidor

// Routes
app.use('/api/movies', require('./routes/movie.route'));
app.use('/',(req,res)=>{res.send('Api is in /api/movies')});

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});