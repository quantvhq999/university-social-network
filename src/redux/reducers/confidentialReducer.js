import { CONFIDENTIAL } from "../actionTypes";

const initialState = { loading: true, data: [], error: false }

const confidentialsReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case CONFIDENTIAL.FETECH_CONFIDENTIAL:
            return {
                ...state,
                loading: true,
                data: [],
                error: false
            }
        case CONFIDENTIAL.FETECH_CONFIDENTIAL_SUCCES:
            return {
                ...state,
                loading: false,
                data: payload.confidentials,
                error: false
            }
        case CONFIDENTIAL.FETECH_CONFIDENTIAL_FAILED:
            return {
                ...state,
                loading: false,
                data: [],
                error: true
            }
            case CONFIDENTIAL.CONFIDENTIAL:
                return {
                    ...state,
                    loading: true,
                    data: {},
                    error: false
                }
            case CONFIDENTIAL.CONFIDENTIAL_SUCCES:
                return {
                    ...state,
                    loading: false,
                    data: payload.confidential,
                    error: false
                }
            case CONFIDENTIAL.CONFIDENTIAL_FAILED:
                return {
                    ...state,
                    loading: false,
                    data: {},
                    error: true
                }
            case CONFIDENTIAL.FETCH_COMMENTS_SUCCES:
                return {
                    ...state,
                    comments:payload.comments
                }
        default:
            return state;
    }
}

export default confidentialsReducer