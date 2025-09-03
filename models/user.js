const mongoose = require("mongoose");
const { type } = require("os");

const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    id:{
        type:String,
        default:uuidv4
    },
    username:{
        type:String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone_no:{
        type:String,
        required:true,
     } 
});


const User = mongoose.model("User",userSchema);

module.exports= User;






