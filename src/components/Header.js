import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/Header.css';

import SearchIcon               from "@material-ui/icons/Search";
import LocationOnOutlinedIcon   from "@material-ui/icons/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import { useSelector, useDispatch } from 'react-redux'

import { logoutInitiate } from '../redux/actions';

const Header = () => {

    // NOTE: useSelector allows access to global state store from aywhere in app
    // NOTE: we can destructure multiple state objects as needed (as below)
    const { user, basket } = useSelector(state => state.data);

    const dispatch = useDispatch();

    const handleAuth = () => {
        if(user) {
        dispatch(logoutInitiate());
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt="amazon_logo" 
                    className="header-logo" />
            </Link>
            <div 
                className="header-option"
                style={{
                    marginRight: '-10px'
                }}>
                <LocationOnOutlinedIcon />
            </div>
            <div className="header-option">
                <span className="header-option1">Hello</span>
                <span className="header-option2">Select Your Address</span>
            </div>
            <div className="search">
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" className="searchInput" />
                <SearchIcon className="searchIcon"/>
            </div>
            <div className="header-nav">
                <Link 
                    to={`${user ? "/" : "/login"}`} 
                    className='header-link'>
                    <div
                        className="header-option"
                        onClick={handleAuth}
                        >
                        <span className="header-option1">
                            Hello, {user ? user.email : 'Guest'}{''}
                        </span>
                        {/* TODO: Add a logout dispatcher here */}
                        <span className="header-option2">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <Link 
                    to="/orders" 
                    className='header-link'>
                    <div className="header-option">
                        <span className="header-option1">Returns</span>
                        <span className="header-option2">Orders</span>
                    </div>
                </Link>
                <Link 
                    to="/login" 
                    className='header-link'>
                    <div className="header-option">
                        <span className="header-option1">Your</span>
                        <span className="header-option2">Prime</span>
                    </div>
                </Link>
                <Link 
                    to="/checkout" 
                    className='header-link'>
                    <div className="header-basket">
                        <ShoppingCartOutlinedIcon />
                            {/* TODO: DYNAMIC COUNT RENDERING */}
                        <span className="header-option2 basket-count">
                            {basket ? basket.length : '0'}
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
