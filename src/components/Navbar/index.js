import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
            <Link to="/">Home</Link>
                <div>
                    <Link to="/profile">Profile</Link>
                    <a href="/">Logout</a>
                </div>
                <div>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
