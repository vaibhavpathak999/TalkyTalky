const express = require("express");
const app = express();
const mongoose = require("mongoose");

const {MONGODBURL} = require("./key"); //getting the mongoDB Atlas connecting URL
const PORT = 5000;


//handling mongodb atlas connection
mongoose.connect(MONGODBURL,
    { useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false });

mongoose.connection.on("connected",()=>{
    console.log("Connected to MongoDB Atlas");
})
mongoose.connection.on("Error",(err)=>{
    console.log("Error: ",err);
})


//using middlewares for sending json data using express
app.use(express.json());

//adding mongodb model
require("./models/user");
require("./models/post");

//adding routes
app.use(require("./routes/auth"));
app.use(require("./routes/post"));


//listening to port
app.listen(PORT,(err)=>{
    if(err) res.send(err);
    console.log("Server is running on port",PORT);
})