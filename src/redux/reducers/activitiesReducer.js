import { ACTIVITIES } from "../actionTypes"

const initialState = { loading: true, data: [], error: false }

const activitiesReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTIVITIES.FETCH_ACTIVITIES:
            return {
                ...state,
                loading: true,
                data: [],
                error: false
            }
        case ACTIVITIES.FETCH_ACTIVITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload.activities,
                error: false
            }
        case ACTIVITIES.FETCH_ACTIVITIES_FAILED:
            return {
                ...state,
                loading: false,
                data: [],
                error: true
            }
        default:
            return state;
    }
}

export default activitiesReducer