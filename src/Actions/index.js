import axios from 'axios';
import axiosWithAuth from '../Utils/axiosWithAuth'

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const registerUser = (newUser) => dispatch => {
    dispatch({
        type: REGISTER_USER_START
    })
    return axios
    .post('https://secretfamilyrecipesbw.herokuapp.com/api/auth/register', newUser)
    .then(res => {
        dispatch({
            type: REGISTER_USER_SUCCESS, payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: REGISTER_USER_FAILURE, payload: err
        })
    })
}

export const loginUser = (user) => dispatch => {
    dispatch({
        type: LOGIN_USER_START
    })
    return axios
        .post('https://secretfamilyrecipesbw.herokuapp.com/api/auth/login', user)
        .then(res => {
            dispatch({
                type: LOGIN_USER_SUCCESS, payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: LOGIN_USER_FAILURE, payload: err
            })
        })
}