
function authHandler() {
const token = localStorage.getItem('token');
const config = {headers: {} };

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    } else {
        console.warn('No token found in localStorage. Authorization header not set.');
    }

    return config;
}   



export default authHandler;