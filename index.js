const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()


// Routes Import
const authRoutes = require('./Routes/Auth');


//Database connection

mongoose.connect(process.env.DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true },
     ()=>{console.log("connected")});


//Middlewares
app.use(express.json());

//Routes Midlewares
app.use('/api/user', authRoutes);




//server listening

app.listen(3000, ()=>{
    console.log("up and running");

})