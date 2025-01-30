import React from 'react';
import './NavBar.css';

const NavBar = ({ onLoginClick, onLogoutClick, loggedIn }) => {
    return (
        <nav>
            {loggedIn ? (
                <div className="nav-center">
                <div className="title">Book Rater</div>
            </div>
                
            ) : (
                <div className="nav-center">
                    <div className="title">Book Rater</div>
                </div>
            )}
            <div className="nav-right">
                {loggedIn ? (
                    <button onClick={onLogoutClick}>Logout</button>
                ) : (
                    <button onClick={onLoginClick}>Login</button>
                )}
            </div>
        </nav>
    );
};

export default NavBar;