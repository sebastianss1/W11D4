import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => {
        return (
        <nav className="login-signup">
            <Link to='/login'>Login </Link>
            <Link to='/signup'>Sign Up</Link>
        </nav>
    )
    }

    const LoggedIn = () => {
        return (
        <nav className="header-group">
            <h2 className="header-name">Hi, {currentUser.usrename}</h2>
            <button className="logout-button" onClick={logout}> Logout </button>
        </nav>
        )
    }

    return currentUser ? LoggedIn() : sessionLinks();
}

export default Greeting;