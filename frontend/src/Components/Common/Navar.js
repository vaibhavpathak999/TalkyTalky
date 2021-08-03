import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import "./css/navbar.css";
import { UserContext } from "../../App";


const Navbar = () => {

    const { state, dispatch } = useContext(UserContext);
    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">Create</Link></li>,
                <li><Link to="/signup">SignOut</Link></li>
            ]
        }
        else {
            return [
                <li><Link to="/signin">SignIn</Link></li>,
                <li><Link to="/signup">SignUp</Link></li>
            ]
        }
    }

    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link  to={state?"/":"/signin"} className="brand-logo left">TalkyTalky</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {renderList()}
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;