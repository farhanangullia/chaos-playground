// set to true or false
const local = false;

var API_BASE_URL = '';
var LIKE_API_PORT = '';
var COUNTER_API_PORT = '';
var AUTH_DOMAIN = '';
var AUTH_CLIENT_ID = '';
var AUTH_REDIRECT_URI = '';

if (local) {
    API_BASE_URL = 'http://localhost';
    LIKE_API_PORT = ':9080';
    COUNTER_API_PORT = ':9090';
    AUTH_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
    AUTH_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
    AUTH_REDIRECT_URI = process.env.REACT_APP_AUTH0_CALLBACK_URL;
} else {
    API_BASE_URL = 'https://demo.summit.angullia.people.aws.dev'; // configure
    AUTH_DOMAIN = 'dev-8v6dzw42alvg4w83.us.auth0.com';
    AUTH_CLIENT_ID = '1a4cLT3XHroagvO9gOBr3GAmGgndPXwM';
    AUTH_REDIRECT_URI = 'https://demo.summit.angullia.people.aws.dev/apps';
    // AUTH_REDIRECT_URI = 'http://localhost:3000/apps';
}

export const LIKE_API_BASE_URL = `${API_BASE_URL}${LIKE_API_PORT}/api/like`;
export const COUNTER_API_BASE_URL = `${API_BASE_URL}${COUNTER_API_PORT}/api/counter`;
export const AUTH0_DOMAIN = AUTH_DOMAIN;
export const AUTH0_CLIENT_ID = AUTH_CLIENT_ID;
export const AUTH0_CALLBACK_URL = AUTH_REDIRECT_URI;