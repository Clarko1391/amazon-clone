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

import Home      from './pages/Home';
import Header    from './components/Header';
import Login     from './pages/Login';
import Register  from './pages/Register';

import './App.css';


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

        </Routes>
      </div>
    </Router>
  );
}

export default App;
