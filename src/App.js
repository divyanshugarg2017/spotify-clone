import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse,  } from "./spotify";


function App() {
//useeffect helps in running code based on a given condition//
  useEffect(() => {
    const token = getTokenFromResponse();
    console.log("here is the token",token);
  }, []); 


  return (
    <div className="app">
      
      <Login/>
    </div>
  );
}

export default App;
