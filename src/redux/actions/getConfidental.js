import { CONFIDENTIAL } from "../actionTypes";
import * as confidentialsApis from "../../apis/confidential"

const fetchConfidentials = () => ({
    type: CONFIDENTIAL.CONFIDENTIAL
})
const fetchConfidentialsSuccess = (data) => ({
    type: CONFIDENTIAL.CONFIDENTIAL_SUCCES,
    payload: { confidential: data }
})
const fetchConfidentialsFailed = () => ({
    type: CONFIDENTIAL.CONFIDENTIAL_FAILED
})

export const fetchConfidentialRequest = (id) =>async (dispatch) => {
    dispatch(fetchConfidentials())
    return await confidentialsApis.fetchConfidential(id).then((res) => {
        dispatch(fetchConfidentialsSuccess(res))
    }).catch(() => {
        fetchConfidentialsFailed()
    })

}