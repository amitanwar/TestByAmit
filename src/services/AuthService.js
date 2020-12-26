/**
* set login 
*/
export const login = () => {
    window.localStorage.setItem('auth', true);
}

/**
* valid authentication is true or not
*/
export const isAuthenticated = () => {
    const isAuth = window.localStorage.getItem('auth');
    if (isAuth == null) {
        return false;
    }
    else {
        return true;
    }
}

/**
* logout
*/
export const logout = () => {
    if (window.localStorage.getItem('auth') != null) {
        window.localStorage.removeItem('auth');
    }
}