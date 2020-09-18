export const authEndpoint = "https://accounts.spotify.com/authorize";      //taken from spotify developer site
const redirectUri = "http://localhost:3000/";
const clientId = "9d477538ff2b41109081f6c6498e6eb7";


const scopes = [
    "user-read-currently-playing",  // actions allowed to be performed on app
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//pulling the login url token
export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;