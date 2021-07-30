const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const auth  = require('../middlewares/auth')
const Post =  mongoose.model("Post")

//creating a post 
router.post("/create",auth,(req,res)=>{
    const {title,body,imageURL} = req.body;

    if(!title || !body || !imageURL)
    {
        return req.statusCode(422).json({message:"Please enter all fields"});
    }
    req.user.password = undefined;
    const post = new Post({
        title,
        body,
        imageURL,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result});
    })
    .catch(err=>{
        console.log("Error",err);
    })
});

//getting all posts
router.get("/posts",(req,res)=>{
    Post.find()
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts});
    })
    .catch(err=>{
        console.log(err);
    })
})

//getting particular user post
router.get("/mypost",auth,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err);
    })
})

module.exports = router;