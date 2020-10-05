import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player"; 
import { useDatalayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();


function App() {
  
  const [{token} ,dispatch] = useDatalayerValue();


//useeffect helps in running code based on a given condition//
useEffect(() => {
  // Set token
  const hash = getTokenFromResponse();
  window.location.hash = "";
  const _token = hash.access_token;

  

//communicating react with spotify api and usin functions provided usin accesstoken //
  if(_token){
    dispatch({
      type : "SET_TOKEN",
      token : _token,
    })
    
    spotify.setAccessToken(_token);

    spotify.getMe().then((user) => {
      dispatch({
        type : 'SET_USER',
        user : user,
      });
    });
    
    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists : playlists,
      });
    });
  }
}, [token, dispatch]);


    
return (
  <div className="app">
    {!token && <Login />}
    {token && <Player spotify={spotify} />}
  </div>
 );
}


export default App;
