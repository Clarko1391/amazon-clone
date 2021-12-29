import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import AmazonLogo from '../assets/Amazon_Logo.png'

import'../styles/Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault();
        console.log('foofoofoofoofoofoofoofoofoo');
    }

    return (
        <div className="login">
            <Link to="/">
            <img 
                src={AmazonLogo} 
                alt="login-logo"
                className='login-logo' 
                />
            </Link>
            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input 
                        type='text'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    <h5>Password</h5>
                    <input 
                        type='password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                    <button 
                        type='submit'
                        onClick={signIn}
                        className='login-signIn'
                        >
                            Sign In
                    </button>
                    <p>By continuing you agree that Amazon is a scam and that you will sacrifice your first born child to the almighty Aztec god, Bezos</p>
                </form>
            </div>

            <p>New to Scamazon?</p>
            <Link to="/register">
                <button className="login-register">
                    Create Your Free Scamazon Account
                </button>
            </Link>

        </div>
    )
}

export default Login
