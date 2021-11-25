import { AUTH } from "../actionTypes"
import Cookies from 'js-cookie'

const token = Cookies.get('tlu_tk')? Cookies.get("tlu_tk") : null
const initialState = token ? { isLoggedIn: true, token } : { isLoggedIn: false, token: null }

export default function authReducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case AUTH.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: payload.token,
            }
        case AUTH.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
            }
        case AUTH.LOGOUT:
            return{
                ...state,
                isLoggedIn: false,
                token:null,
                user:null
            }
        case AUTH.FETCH_USER_SUCCESS:
            return{
                ...state,
                isLoggedIn: true,
                user:payload.user
            }
        default:
            return state
    }
}
