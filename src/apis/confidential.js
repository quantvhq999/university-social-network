import axiosServices from "../common/axiosServices";
import { API_URL } from "../common/defines";

export const fetchConfidentials =async () =>{
    let endpoint = API_URL + 'confidential'
    return await axiosServices.get(endpoint).then((res)=>{
        return res.data
    })
}

export const fetchConfidential = async (id) =>{
    let endpoint = API_URL + 'confidential/' + id
    return await axiosServices.get(endpoint).then((res)=>{
        return res.data
    })
}

export const fetchComment = async (id) =>{
    let enpoint =API_URL + 'confidential/comment/'+id
    return await axiosServices.get(enpoint).then(res =>{
        return res.data
    })
}

export const postConfidential = async (data) =>{
    let enpoint =API_URL + 'confidential/'
    return await axiosServices.post(enpoint,data).then(res =>{
        return res.data 
    })
}