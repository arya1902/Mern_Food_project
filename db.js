const mongoose = require("mongoose");

var mongoURL="mongodb+srv://GOFood:123@cluster0.yftbefq.mongodb.net/mern-pizza"

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db = mongoose.connection

db.on('connected',()=>{
    console.log("db connected...")
})
db.on('error',()=>{
    console.log("Error in db")
})
module.exports = mongoose