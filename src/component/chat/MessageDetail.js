import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { fetchFriends } from "../../apis/auth";
import { fetchConversation, postConversation } from "../../apis/message";
import { useDispatch } from "react-redux";

export default function MessageDetail(props) {
  const { userCurrent, select } = props;
  const socket = useRef(io("ws://localhost:8600"));
  const [onlineUser, setOnlineUser] = useState(null);
  const [friends, setFriends] = useState([]);

  /// Hook
  const dispatch = useDispatch()
  /// Check online friends
  const checkOnline = (friend) => {
      if(onlineUser){
        const active = onlineUser.some(person => person.userId === friend.mssv)
        return active? <span className="active-dot"></span> : <></>
      }
  }

  /// Friend chat click
  const handleClick = async (friend) =>{
      const data ={
          send:userCurrent && userCurrent.mssv,
          receive: friend.mssv
      }
      try {
          const res = await fetchConversation(data)
          if(res.length > 0){
              select(res[0])
          }else{
              const data={
                  sender: userCurrent && userCurrent.mssv,
                  receiver : friend.mssv
              }
              const res = await postConversation(data)
              select(res.data)
              dispatch(fetchConversation(userCurrent && userCurrent.mssv))
          }
      } catch (error) {
          console.log('Failed to get conversation', error)
      }
  }
  /// Effect get friend
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friends = await fetchFriends(userCurrent?.mssv);
        setFriends(friends);
      } catch (error) {
        console.log("Failed get friends", error);
      }
    };
    getFriends();
  }, [userCurrent]);
  /// Effect get online user
  useEffect(() => {
    socket.current.on("getUser", (users) => {
      setOnlineUser(users);
    });
  }, [userCurrent]);

  return (
    <div className="message-detail box">
      <div className="message-detail__head">
        <h3>Danh sách bạn bè</h3>
      </div>
      <div className="list-friends">
        {friends &&
          friends.length > 0 &&
          friends
            .sort(function (a, b) {
              if (a.first_name < b.first_name) {
                return -1;
              }
              if (a.first_name > b.first_name) {
                return 1;
              }
              return 0;
            })
            .map((friend, index) => (
              <div key={index} className="list-friends-items" onClick={()=>handleClick(friend)}>
                <div className="friend-avatar">
                  <img src={friend.avatar} />
                  {checkOnline(friend)}
                </div>
                <h4>{friend.last_name + " " + friend.first_name}</h4>
              </div>
            ))}
      </div>
    </div>
  );
}
