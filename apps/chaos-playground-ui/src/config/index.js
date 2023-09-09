// Auth
export const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
export const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
export const AUTH0_CALLBACK_URL = process.env.REACT_APP_AUTH0_CALLBACK_URL;

// API
export const LIKE_API_BASE_URL = process.env.REACT_APP_LIKE_API_BASE_URL;
export const COUNTER_API_BASE_URL = process.env.REACT_APP_COUNTER_API_BASE_URL;
export const CATALOG_API_BASE_URL = process.env.REACT_APP_CATALOG_API_BASE_URL;
export const CART_API_BASE_URL = process.env.REACT_APP_CART_API_BASE_URL;
export const ORDER_API_BASE_URL = process.env.REACT_APP_ORDER_API_BASE_URL;

let enableAuth = true;
if (AUTH0_DOMAIN === "" || AUTH0_CLIENT_ID === "" || AUTH0_CALLBACK_URL === "") {
    enableAuth = false;
}

export const AUTH0_ENABLED = enableAuth;