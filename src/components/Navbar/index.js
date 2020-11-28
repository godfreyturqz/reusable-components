import React, {useState} from 'react'
import { BrowserRouter, Link } from "react-router-dom";
import './styles.css'


function Navbar() {
    const [isUser, setIsUser] = useState(true)

    const handleLogout = ()=>{
        setIsUser(false)
        // axios.get('/logout')
        // .then(() => setIsUser(false))
        // .catch(error => console.log(error))
    }

    return (
        <BrowserRouter>
        <div className="navbar-container">
            <div className="navbar-wrapper">
            <Link to="/">Home</Link>
            {
                isUser ? 
                <div>
                    <Link to="/profile">Profile</Link>
                    <Link to="/" onClick={handleLogout}>Logout</Link>
                </div>
                :
                <div>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>
            }
            </div>
        </div>
        </BrowserRouter>
    )
}

export default Navbar
