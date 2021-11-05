import axiosServices from "../common/axiosServices";
import { API_URL } from "../common/defines";

export const fetchActivities =async () =>{
    let endpoint = API_URL + 'activities'
    return await axiosServices.get(endpoint).then((res)=>{
        return res.data
    })
}
