import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendSignInReq = () => {

        // axios.post("http://localhost:5000/signup",{
        //     headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' },
        //     body:JSON.stringify({
        //         name:name,
        //         email:email,
        //         password:password})
        // }).then(res=>res.json())
        // .then(data=>console.log(data))

        fetch("/signup", {
            method: 'post',
            url: '/signup',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        }).then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return (
        <div className="signup">
            <div className="card mycard">
                <h4 className="appName">TalkyTalky</h4>
                <input className="inputBox" type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="name"></input>
                <input className="inputBox" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="email"></input>
                <input className="inputBox" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="password"></input>
                <input className="inputBox" type="password" placeholder="confirm password"></input>
                <button onClick={() => { sendSignInReq() }} className="signinBtn">SignUp</button>
                <p style={{ marginLeft: "12px" }}>
                    <Link to="/signin">If already registered. SignIn Account</Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp;