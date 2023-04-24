const express = require("express");
const mongoose = require("mongoose")
const db = require("./db");
const path = require("path");
const Pizza = require('./models/pizzaModel')

const app = express();

app.use(express.json());
const pizzaRoute = require('./routes/pizzaRoute')
const userRoute = require('./routes/userRoute')


app.use('/api/pizzas/',pizzaRoute)
app.use('/api/users/',userRoute)

app.get("/",(req,res)=>{
res.send("Server is Running", +port)
});


const port = process.env.PORT || 8000;


    app.use(express.static(path.join(__dirname,'./mern/build')))
  
    app.get("*",function(req,res){
        res.sendFile(path.join(__dirname,'./mern/build/index.html'));
    });
 

app.listen(port , ()=> `Server is running on port`);