import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import AmazonLogo from '../assets/Amazon_Logo.png'

import '../styles/Register.css';
import { registerInitiate } from '../redux/actions';

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // NOTE: must use state.data as line 6 of root-reducer keys the store as data
    // this line provides easy access to a snapshot of app state 
    // const state = useSelector((state) => state.data)

    // This line allows us to destructure a particular state from the state object
    const { user } = useSelector((state) => state.data)

    // if user is registered successfully, reroute to home page
    useEffect(() => {
        if(user) {
            navigate('/');
        }
    }, [user, navigate])

    console.log("user =>", user);



    const register = (e) => {
        e.preventDefault();
        dispatch(registerInitiate(email, password))
        setEmail("");
        setPassword("");
    }

    return (
        <div className="register">
            <Link to="/">
                <img 
                    src={AmazonLogo} 
                    alt="amazon_logo" 
                    className='register-logo'
                    />
            </Link>
            <div className="register-container">
                <h1>Create Account</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(e) => {setEmail(e.target.value)}}
                        />
                    <h5>Password</h5>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => {setPassword(e.target.value)}}
                        />
                    <button 
                    type='submit'
                    onClick={register}
                    className='continue'
                    >
                        Continue
                    </button>
                    <div className="detail">
                        <p>Already have an account? </p>
                        <Link to='/login' className="signIn-link">
                            <p> Sign In</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register