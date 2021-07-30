const JWT = require("jsonwebtoken");
const {JWT_SECRET} = require("../../key");
const mongoose = require("mongoose");
const User = mongoose.model("User");

//creating an export function to authorize users and send a jsonwebtoken
module.exports = (req,res,next)=>{

    const {authorization} = req.headers;
    //authorization = bearer some_token

    if(!authorization) return res.status(401).json({error:"You must be logged in"});

    const token = authorization.replace("Bearer ","")
    JWT.verify(token,JWT_SECRET,(err,payload)=>{
        if(err) return res.status(401).json({error:"You must be logged in"});
        const {_id} = payload;
        User.findById(_id).then(userData=>{
            req.user = userData;
            next();
        })
    })
}