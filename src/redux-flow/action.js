import {USER_STORE} from '../constants/app/appConstants.jsx';

export const handleLoginWithGoogle = (data) => {
    localStorage.setItem(USER_STORE, JSON.stringify(data));
    return {
        type: 'auth/gooleLogin',
        payload: data
    }
}

export const handleLogin = (data) => {
    localStorage.setItem(USER_STORE, JSON.stringify(data));
    return {
        type: 'auth/login',
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