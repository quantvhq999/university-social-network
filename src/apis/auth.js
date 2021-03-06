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

export const fetchUserInfo = async (data) =>{
    let endpoint = API_URL+`auth/user/${data}`
    return await axiosServices.get(endpoint).then((res) =>{
        return res.data
    })
}

export const fetchFriends = async (data) =>{
    let endpoint = API_URL +`user/friends/${data}`
    return await axiosServices.get(endpoint).then((res) =>{
        return res.data
    })
}

export const fetchImages = async (data) =>{
    let endpoint = API_URL +`user/image/${data}`
    return await axiosServices.get(endpoint).then((res) =>{
        return res.data
    })
}

export const searchUser = async (data) =>{
    let endpoint = API_URL +`user/${data}`
    return await axiosServices.post(endpoint).then((res) =>{
        return res.data
    })
}

export const fetchFriendsRequest = async (data) =>{
    let endpoint = API_URL +`user/request/${data}`
    return await axiosServices.get(endpoint).then((res) =>{
        return res.data
    })
}

export const acceptRequest = async (data) =>{
    let endpoint = API_URL +`user/friends/accept`
    return await axiosServices.post(endpoint, data).then((res) =>{
        return res.data
    })
}

export const postRequest = async (data) =>{
    let endpoint = API_URL +`user/friends/request`
    return await axiosServices.post(endpoint, data).then((res) =>{
        return res.data
    })
}
