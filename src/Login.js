import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';


function Login() {
    return (
        <div className="login">
            <h1>i am login page</h1>
            <img src = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt =""/>
            <a href={loginUrl}>login with spotify</a>
        </div>
    )
}

export default Login;
