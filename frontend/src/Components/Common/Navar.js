import React from "react";
import {Link} from 'react-router-dom';
import "./css/navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to="#" className="brand-logo left">TalkyTalky</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/create">Create</Link></li>
                        <li><Link to="/signin">SignIn</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;