import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchActivitiesRequest } from "../../redux/actions/activitiesAction";
export default function FetchInitData({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActivitiesRequest())
  }, []);
  return children;
}
