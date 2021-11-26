import { CONFIDENTIAL } from "../actionTypes";

const initialState = { loading: true, comments: [], error: false }

const commentsReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case CONFIDENTIAL.FETCH_COMMENTS_SUCCES:
            return {
                ...state,
                comments: payload.comments
            }
        default:
            return state;
    }
}

export default commentsReducer