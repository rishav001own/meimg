require("dotenv").config();
const express = require ('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',() =>{
    console.log("Hey Your db connected so dont worry only you application enjoy ")
})

mongoose.connection.on('error',(err)=>{
    console.log("error while connecting db please check me")
})

app.get('/',(req,res)=>
    res.send("welcom to my world"));


app.listen(port,()=>
    console.log(`server running on port ${port}`));