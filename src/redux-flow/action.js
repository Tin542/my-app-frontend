import {USER_STORE} from '../constants/app/appConstants.jsx';

export const handleLogin = (data) => {
    localStorage.setItem(USER_STORE, JSON.stringify(data));
    return {
        type: 'auth/login',
        payload: data
    }
}

export const handleLogout = (data) => {
    localStorage.setItem(USER_STORE, {});
    return {
        type: 'auth/logout',
        payload: data
    }
}

export const handleUpdateProfile = (data) => {
    localStorage.setItem(USER_STORE, JSON.stringify(data));
    return {
        type: 'auth/updateProfile',
        payload: data
    }
}