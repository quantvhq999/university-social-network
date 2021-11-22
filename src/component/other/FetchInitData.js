import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivitiesRequest } from "../../redux/actions/activitiesAction";
import { getUserRequest, logout } from "../../redux/actions/authAction";

export default function FetchInitData({ children }) {
  const dispatch = useDispatch();
  const id = Cookies.get('tlu_id')
  
  useEffect(() => {
    if(id){
      dispatch(fetchActivitiesRequest())
      dispatch(getUserRequest(id))
    }else{
      dispatch(logout())
    }
  }, []);
  return children;
}
