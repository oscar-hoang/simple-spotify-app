const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const URI = 'http://localhost:8888/artist';

// const scopes = [
//   'user-read-email',
//   'user-read-private'
// ];
// &scope=${encodeURIComponent(scopes.join('%20'))}

const urlAuth = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${URI}&response_type=token`;

export default urlAuth;
