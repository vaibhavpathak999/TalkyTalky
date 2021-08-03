import React,{useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from "../../App";
import M from 'materialize-css'

const SignIn = () => {
    
    const {state,dispatch} = useContext(UserContext); 

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendSignInReq = () => {
            fetch("/signin",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    password,
                    email
                })
            }).then(response => response.json())
                .then(data => {
                    if(data.error)
                    {
                        M.toast({html: data.error,classes:"#00b0ff light-blue accent-3"})
                    }
                    else
                    {
                        //dispatching data to USERCONTEXT
                        localStorage.setItem("jwt",data.token)
                        localStorage.setItem("user",JSON.stringify(data.user))
                        dispatch({type:"USER",payload:data.user})
                        console.log(data);
                        M.toast({html: 'Signed In Successfully',classes:"#9ccc65 light-green lighten-1"});
                        history.push("/");
                    }
                })
                .catch(err => console.error(err,"hello"))
        }
       

    return(
        <div className="signincard">
            <div className="card mycard">
                <h4 className="appName">TalkyTalky</h4>
                <input className="inputBox" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="email"></input>
                <input className="inputBox" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="password"></input>
                <button onClick={() => { sendSignInReq() }} className="signinBtn">SignIn</button>
                <p style={{marginLeft:"12px"}}>
                    <Link to="/signup">If already not registered. Create Account</Link>
                </p>
            </div>
        </div>
    )
}


export default SignIn;