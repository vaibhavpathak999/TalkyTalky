const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const {JWT_SECRET} = require("./../key");
const auth = require("../middlewares/auth");

router.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(422).json({ error: "please enter all fields" });
    }
    else {
        bcrypt.hash(password, 12)
            .then(hashedPassword => {
                User.findOne({ email: email })
                    .then((savedUser) => {
                        if (savedUser) res.json({ error: "Email already registered" })
                        const user = new User({
                            name,
                            email,
                            password: hashedPassword
                        })
                        user.save()
                            .then(user => {
                                res.json({ message: "Successfully registered" })
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
    }
})

router.post("/signin", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please enter email or password" })
    }
    User.findOne({ email: email })
        .then((user) => {
            if (!user) return res.status(422).json({ error: "Mail or Password Wrong" })
            bcrypt.compare(password, user.password)
                .then(ifMatch => {
                    if (ifMatch){
                        const token = JWT.sign({_id:user._id},JWT_SECRET)
                        const {_id,name,email} = user;
                        res.json({token,user:{_id,name,email}}) 
                    } 
                    // res.json({ message: "Successfully Signed in" })
                    else res.status(422).json({ error: "Mail or Password Wrong" })
                })
        })
        .catch((err) => {
            console.log(err);
        })
})

router.get("/protected",auth,(req,res)=>{
    res.send(req.user);
})
module.exports = router;