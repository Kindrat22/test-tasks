import React from 'react';
import './Main.css';
import {NavLink} from 'react-router-dom';

function Main() {

    let username = sessionStorage.getItem('username');
    return (
        <div className="main">
        <p className = "">Welcome, {username}!</p>
        <NavLink className ="back-btn btn" to = "/">Back</NavLink>
        </div>
    );
}

export default Main;
