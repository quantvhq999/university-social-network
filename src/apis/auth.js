import axiosServices from "../common/axiosServices"; 
import Cookies from "js-cookie";
import { API_URL } from "../common/defines";

const url ='auth/'
export const loginUser = async (data) =>{
    let endpoint = `${API_URL+ url}login`
    return await axiosServices.post(endpoint, data).then((res) =>{
        Cookies.set('tlu_tk', res.data.access_token,{secure: true, sameSite: 'strict', expires: 30})
        return res.data
    })
}

export const logoutUser = () =>{
        console.log("delete")
        Cookies.remove('tlu_tk')
}
export const fetchUser = async (data) =>{
    let endpoint = `${API_URL+ url + data.mssv}`
    return await axiosServices.post(endpoint, data).then((res) =>{
        console.log(res)
    })
}