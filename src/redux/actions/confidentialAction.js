import { CONFIDENTIAL } from "../actionTypes";
import * as confidentialsApis from "../../apis/confidential"

const fetchConfidentials = () => ({
    type: CONFIDENTIAL.FETECH_CONFIDENTIAL
})
const fetchConfidentialsSuccess = (data) => ({
    type: CONFIDENTIAL.FETECH_CONFIDENTIAL_SUCCES,
    payload: { confidentials: data }
})
const fetchConfidentialsFailed = () => ({
    type: CONFIDENTIAL.FETECH_CONFIDENTIAL_FAILED
})

const fetchCommentsSuccess = (data) => ({
    type: CONFIDENTIAL.FETCH_COMMENTS_SUCCES,
    payload: { comments: data }
})
const fetchCommentsFailed = () => ({
    type: CONFIDENTIAL.FETECH_CONFIDENTIAL_FAILED
})

const postConfidentialSuccess = (data) => ({
    type: CONFIDENTIAL.FETECH_CONFIDENTIAL_SUCCES,
    payload: { post: data }
})

export const fetchConfidentialsRequest = () =>async (dispatch) => {
    dispatch(fetchConfidentials())
    return confidentialsApis.fetchConfidentials().then((res) => {
        dispatch(fetchConfidentialsSuccess(res))
    }).catch(() => {
        fetchConfidentialsFailed()
    })

}
export const fetchCommentsRequest = (id) =>async (dispatch) => {
    return confidentialsApis.fetchComment(id).then((res) => {
        dispatch(fetchCommentsSuccess(res))
    }).catch(() => {
        dispatch(fetchCommentsFailed())
    })

}

export const commentRequest = (data) => async (dispatch) =>{
    return confidentialsApis.postConfidentialComment(data).then((res) => {
        dispatch(fetchCommentsSuccess(res))
    }).catch(() => {
        dispatch(fetchCommentsFailed())
    })
}

export const postConfidentialRequest = (data) => async (dispatch) =>{
    return confidentialsApis.postConfidential(data).then((res) =>{
        dispatch(postConfidentialSuccess(res))
    }).catch((err) =>{
        console.log('Post failed', err)
    })
}
