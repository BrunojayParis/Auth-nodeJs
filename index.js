const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

//Database connection

mongoose.connect(process.env.DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true },
     ()=>{console.log("connected")});

// Routes Middlewares
const authRoutes = require('./Routes/Auth');




//server listening

app.listen(3000, ()=>{
    console.log("up and running");

})