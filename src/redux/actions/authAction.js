import { AUTH } from "../actionTypes"
import * as authApis from "../../apis/auth"
//User login

export const fetchUser = () => ({
    type: AUTH.FETCH_USER
})
export const fetchUserSuccess = (data) => ({
    type: AUTH.FETCH_USER_SUCCESS,
    payload: { user: data }
})
export const fetchUserFail = () => ({
    type: AUTH.FETCH_USER_FAIL
})

export const login = () => ({
    type: AUTH.LOGIN
})
export const loginSuccess = (data) => ({
    type: AUTH.LOGIN_SUCCESS,
    payload: { token: data }
})
export const loginFail = () => ({
    type: AUTH.LOGIN_FAIL
})

export const logout = () => ({
    type: AUTH.LOGOUT
})

export const loginRequest = (data) => (dispatch) => {
    dispatch(login())
    return authApis.loginUser(data).then(
        (res) => {
            dispatch(loginSuccess(res))
            return Promise.resolve()
        }).catch(
            () => {
                dispatch(loginFail())
                return Promise.reject()
            })
}

export const logoutRequest = () => {
    return (dispatch) => {
        dispatch(logout())
        authApis.logoutUser()
    }
    
}

export const getUserRequest = (token) => {
    // return (dispatch) => {
    //     dispatch(fetchUser())
    //     authApis.getUserByToken(token).then(
    //         (res) => {
    //             dispatch(fetchUserSuccess(res))
    //         })
    //         .catch(() => {
    //             dispatch(fetchUserFail())
    //         })
    // }
}