import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import { useDispatch } from 'react-redux';

import { auth } from './utils/firebase'

import { onAuthStateChanged } from '@firebase/auth';

import { setUser } from './redux/actions';

import Home          from './pages/Home';
import Header        from './components/Header';
import Login         from './pages/Login';
import Register      from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import Checkout      from './pages/Checkout';


import './App.css';
import Payment from './pages/Payment';


function App() {

  const dispatch = useDispatch();

  // watches for changes on Firebase auth to persist user data across page reloads
  useEffect(()=>{
    onAuthStateChanged( auth, (user) => {
      if(user) {
        dispatch(setUser(user))
      } else {
        dispatch(setUser(null))
      }
    })
  },[dispatch])

  return (
    <Router>
      <div className="App">
        <Routes>

          <Route 
              path="/login" 
              caseSensitive={false} 
              element={ <Login /> }/>

          <Route 
              path="/register" 
              caseSensitive={false} 
              element={ <Register /> }/>

          <Route 
            path="/" 
            caseSensitive={false} 
            element={
              <>
                <Header />
                <Home />
              </>
            }/>

          <Route 
            path="/product/:id" 
            caseSensitive={false} 
            element={
              <>
                <Header />
                <SingleProduct />
              </>
            }/>

          <Route 
              path="/checkout" 
              caseSensitive={false} 
              element={ 
                <>
                  <Header />
                  <Checkout />
                </>
              }/>

          <Route 
              path="/payment" 
              caseSensitive={false} 
              element={ 
                <>
                  <Header />
                  <Payment />
                </>
              }/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
