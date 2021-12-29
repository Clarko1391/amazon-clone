import * as types from './actionTypes';

import { auth } from '../utils/firebase';

// import functions to create or sign in users from firebase/auth (requires auth object)
// from utils/firebase.js to be passed in as a prop in order to work properly
import { createUserWithEmailAndPassword } from 'firebase/auth';

// NOTE: dispatch is coming from redux-thunk, not directly from redux

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