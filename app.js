const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/AlienDBex';

const app = express();

mongoose.connect(url, {useNewUrlParser: true});

const con = mongoose.connection;

app.use(express.json());

con.on('open', ()=>{

    console.log("Connection Established...");

})

const alienRouter = require('./routers/aliens');
app.use('/aliens', alienRouter);


app.listen(9000, ()=>{
    console.log("Server Started");
});