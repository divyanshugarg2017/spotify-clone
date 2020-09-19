import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player"; 

const spotify = new SpotifyWebApi();


function App() {
  const [token , setToken] = useState(null);
//useeffect helps in running code based on a given condition//
useEffect(() => {
  // Set token
  const hash = getTokenFromResponse();
  window.location.hash = "";
  const _token = hash.access_token;

//communicating react with spotify api and usin functions provided usin accesstoken //
  if(_token){
    setToken(_token)
    spotify.setAccessToken(_token);

    spotify.getMe().then(user => {
      console.log('penguin',user);
    });
  }
    
    console.log("here is the token",_token);
  }, []); 


  return (
    <div className="app">
    {
        token ? <Player/> : <Login/>
    }  
    </div>
  );
      } 


export default App;
