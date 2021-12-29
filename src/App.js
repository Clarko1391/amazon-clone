import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import Home      from './pages/Home';
import Header    from './components/Header';
import Login     from './pages/Login';
import Register  from './pages/Register';


function App() {
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
