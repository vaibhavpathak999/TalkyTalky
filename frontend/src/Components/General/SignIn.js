import React, {useState} from "react";
import "./css/signin.css";
import {Link} from "react-router-dom"; 

const SignIn = () => {


    return(
        <div className="signincard">
            <div className="card mycard">
                <h4 className="appName">TalkyTalky</h4>
                <input className="inputBox" type="email" placeholder="email"></input>
                <input className="inputBox" type="password" placeholder="password"></input>
                <button className="signinBtn">SignIn</button>
                <p style={{marginLeft:"12px"}}>
                    <Link to="/signup">If already not registered. Create Account</Link>
                </p>
            </div>
        </div>
    )
}

export default SignIn;