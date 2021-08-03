import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const SignUp = () => {
    
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const sendSignUpReq = () => {
        
        if(confirmPassword==password)
        {
            fetch("/signup",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    password,
                    email
                })
            }).then(response => response.json())
                .then(data => {
                    if(data.error)
                    {
                        M.toast({html: data.error,classes:"#00b0ff light-blue accent-3"})
                    }
                    else if(data.message)
                    {
                        M.toast({html: data.message,classes:"#9ccc65 light-green lighten-1"});
                        history.push("/signin");
                    }
                })
                .catch(err => console.error(err))
        }
        else{
            M.toast({html:'Passwords do not match',classes:"#00b0ff light-blue accent-3"})
        }
       
    }

    return (
        <div className="signup">
            <div className="card mycard">
                <h4 className="appName">TalkyTalky</h4>
                <input className="inputBox" type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="name"></input>
                <input className="inputBox" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="email"></input>
                <input className="inputBox" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="password"></input>
                <input className="inputBox" type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} placeholder="confirm password"></input>
                <button onClick={() => { sendSignUpReq() }} className="signinBtn">SignUp</button>
                <p style={{ marginLeft: "12px" }}>
                    <Link to="/signin">If already registered. SignIn Account</Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp;