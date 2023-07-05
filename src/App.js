import React from 'react';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import HomeScreen from './screens/HomeScreen' ;
import Login from './screens/Login';

function App() {
  const user = false ;

  return (
    <div className="App">
     <Router>
      {!user ? (<Login/>) : (
        <Routes>
          <Route path='/'  element={<HomeScreen/>}/>
        </Routes>
      )}
     </Router>
    </div>
  );
}

export default App;
