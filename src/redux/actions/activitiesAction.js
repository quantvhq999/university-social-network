import { ACTIVITIES } from "../actionTypes";
import * as activitiesApis from "../../apis/activities"

const fetchActivities = () => ({
    type: ACTIVITIES.FETCH_ACTIVITIES
})
const fetchActivitiesSuccess = (data) => ({
    type: ACTIVITIES.FETCH_ACTIVITIES_SUCCESS,
    payload: { activities: data }
})
const fetchActivitiesFailed = () => ({
    type: ACTIVITIES.FETCH_ACTIVITIES_FAILED
})

export const fetchActivitiesRequest = () =>async (dispatch) => {
    dispatch(fetchActivities())
    return await activitiesApis.fetchActivities().then((res) => {
        dispatch(fetchActivitiesSuccess(res))
    }).catch(() => {
        fetchActivitiesFailed()
    })

}