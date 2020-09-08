import React from 'react';
import './Login.css';
import {NavLink} from 'react-router-dom';

function Login() {


    //add user credentials to session storage
    function addUser(username:string, password:string) {
        //check inputed     
        if(username === "" && password === ""){
            alert("You didnt input username and password!")
            sessionStorage.setItem('username', "unknown");
        }else if(username === ""){
            alert("You didnt input username!")
            sessionStorage.setItem('username', "unknown");
        }else if(password === ""){
            alert("You didnt input password!")
            
        }else{
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('password', password);
            window.location.href= "/main";
        }
    }
    return (
        <div className="login">
            <div className="form">
                <form id = "login-form m-4" className="login-form">
                    <p>Insert your LinkedIn credentials to Login</p>
                    <input id = "username" type="text" placeholder="Username"/>
                    <input id = "password" type="password" placeholder="Password"/>
                    <NavLink
                        to = '/'
                        className = "btn" 
                        onClick ={ () => addUser((document.getElementById("username") as HTMLInputElement).value, (document.getElementById("password") as HTMLInputElement).value)}>
                        Login
                    </NavLink>
                </form>
            </div>
        </div>
    );
}

export default Login;
