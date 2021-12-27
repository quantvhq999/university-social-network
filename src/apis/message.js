import axiosServices from "../common/axiosServices";
import { API_URL } from "../common/defines";

export const getCoversation = async(id) =>{
    const url = API_URL + "conversation/"+id
    return axiosServices.get(url)
}

export const getMessages = async (data) =>{
    const url = API_URL + "message/"+ data
    return axiosServices.get(url)
}

export const postMessage = (data) =>{
    const url = API_URL + "message"
    return axiosServices.post(url,data)
}

export const fetchConversation = async (data) =>{
    const url = API_URL + "conversation/"+`${data.send}/${data.receive}`
    return axiosServices.get(url).then(res =>{
        return res.data
    })
}

export const postConversation = async (data) =>{
    const url = API_URL + "conversation"
    return axiosServices.post(url,data)
}