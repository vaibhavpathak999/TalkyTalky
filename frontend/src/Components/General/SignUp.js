import React from "react";
import {Link} from "react-router-dom";

const SignUp = () => {
    return(
        <div className="signup">
            <div className="card mycard">
                <h4 className="appName">TalkyTalky</h4>
                <input className="inputBox" type="text" placeholder="name"></input>
                <input className="inputBox" type="email" placeholder="email"></input>
                <input className="inputBox" type="password" placeholder="password"></input>
                <input className="inputBox" type="password" placeholder="confirm password"></input>
                <button className="signinBtn">SignUp</button>
                <p style={{marginLeft:"12px"}}>
                    <Link to="/signin">If already registered. SignIn Account</Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp;