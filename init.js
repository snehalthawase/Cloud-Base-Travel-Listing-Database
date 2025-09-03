const mongoose = require("mongoose");
const User = require("./models/user.js");
require("dotenv").config();

const dbUrl = process.env.ATLASDB_URL;


main()
.then(()=>{
    console.log("done");
})
.catch((e)=>{
    console.log(e);
});


async function main() {
    await mongoose.connect(dbUrl);
};

const user1= new User({
    username:"Snehal Thawase",
    email:"snehalthawase@gmail.com",
    password:"Sne140306",
    phone_no:"8767380902",
});

user1.save()
 .then((res)=>{
    console.log("connection successful");
  })
  .catch((e)=>{
    console.log(e);
  });