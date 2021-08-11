import React from 'react';
import './Login.css';
import { accessUrl  } from './spotify';

function Login() {
    return (
        <div className="login">
            <img 
            src='https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo.png'
            alt='' />
            <a href={accessUrl }>Login with Spotify</a>
        </div>
    )
}

export default Login
