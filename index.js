if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}
// console.log(process.env.ATLASDB_URL);

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8080;

const dbUrl = process.env.ATLASDB_URL;

main()
  .then(()=>{
    console.log("connected to DB");
  })
  .catch((e)=>{
    console.log(e);
  });

async function main(){
    await mongoose.connect(dbUrl);
}  

app.get("/",(req,res)=>{
    res.send("It is working");
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})
