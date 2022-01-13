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

export const updateCover = async (data) =>{
    const url = API_URL + "posts/cover/"+ `${data.mssv}`
    return axiosServices.post(url,data.form).then(res =>{
        return res.data
    })
}

export const updateAvatar = async (data) =>{
    const url = API_URL + "posts/avatar/"+ `${data.mssv}`
    return axiosServices.post(url,data.form).then(res =>{
        return res.data
    })
}

export const deletePost = async (data) =>{
    const url = API_URL + "posts/"+ `${data}`
    return axiosServices.delete(url).then(res =>{
        return res.data
    })
}

export const addPost = async (data) =>{
    const url = API_URL + "posts"
    return axiosServices.post(url, data).then(res =>{
        return res.data
    }).catch(error => console.log(error))
}

export const getComments = async (id) =>{
    const url = API_URL + "posts/comments/"+id
    return axiosServices.get(url).then(res =>{
        return res.data
    })
}

export const addComment = async (data) =>{
    const url = API_URL + "posts/comment/"
    return axiosServices.post(url,data).then(res =>{
        return res.data
    })
}