import axiosServices from "../common/axiosServices"; 
import Cookies from "js-cookie";
import { API_URL } from "../common/defines";

const url ='auth/'
export const loginUser = async (data) =>{
    let endpoint = `${API_URL+ url}login`
    return await axiosServices.post(endpoint, data).then((res) =>{
        Cookies.set('tlu_tk', res.data.access_token,{secure: true, sameSite: 'strict', expires: 30})
        Cookies.set('tlu_id', res.data.user.mssv,{secure: true, sameSite: 'strict', expires: 30})
        return res.data
    })
}

export const logoutUser = () =>{
        console.log("delete")
        Cookies.remove('tlu_tk')
        Cookies.remove('tlu_id')
}
export const fetchUser = async (data) =>{
    let endpoint = `${API_URL+ url+ data}`
    return await axiosServices.get(endpoint).then((res) =>{
        return res.data
    })
}