import * as types from './actionTypes';

import { auth } from '../utils/firebase';

// import Auth'ing functions from firebase/auth
//   requires auth object from utils/firebase.js as first prop
// REFERENCE: https://firebase.google.com/docs/auth/web/start?authuser=0
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
    } from 'firebase/auth';

// NOTE: dispatch is coming from redux-thunk, not directly from redux
//       there is no import for 'dispatch', it is the global default unless overwritten 


// Registration Functionality
const registerStart = () => ({
    type: types.REGISTER_START
});

const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
});

const registerError = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error
});

export const registerInitiate = (email, password) => {
    return function(dispatch) {
        dispatch(registerStart());
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(registerSuccess(user))
        }).catch(error => dispatch(registerError(error.message)))
    }
}




// Login Functionality
const loginStart = () => ({
    type: types.LOGIN_START
});

const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
});

const loginError = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error
});

export const loginInitiate = (email, password) => {
    return function(dispatch) {
        dispatch(loginStart());
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(loginSuccess(user))
        }).catch(error => dispatch(loginError(error.message)))
    }
}




// Sets user from firebase/auth to persist between reloads
export const setUser = user => ({
    type: types.SET_USER,
    payload: user
});




// Logout Functionality
const logoutStart = () => ({
    type: types.LOGOUT_START
});

const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
});

const logoutError = (error) => ({
    type: types.LOGOUT_FAIL,
    payload: error
});

export const logoutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart());
        signOut(auth, (res) => {
            dispatch(logoutSuccess)
        })
        .catch((error) => (dispatch(logoutError(error.message))))
    }
};




// Add to Basket Functionality
export const addToBasket = (item) => ({
    type: types.ADD_TO_BASKET,
    payload: item,
});

// Remove from Basket Functionality
export const removeFromBasket = (uuid) => ({
    type: types.REMOVE_FROM_BASKET,
    payload: uuid,
});