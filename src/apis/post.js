import axiosServices from "../common/axiosServices";
import { API_URL } from "../common/defines";

export const getFeed = async (id) =>{
    const url = API_URL + "posts/"+id
    return axiosServices.get(url).then(res =>{
        return res.data
    })
}

export const votePost = async (data) =>{
    const url = API_URL + "posts/vote/"+ `${data.mssv}/${data.id}/${data.type}`
    return axiosServices.post(url)
}

export const getPost = async (id) =>{
    const url = API_URL + "posts/post/"+id
    return axiosServices.get(url).then(res =>{
        return res.data
    })
}
export const getPostProfile = async (id) =>{
    const url = API_URL + "posts/user/"+id
    return axiosServices.get(url).then(res =>{
        return res.data
    })
}