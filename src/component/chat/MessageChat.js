import React, { useState } from "react";
import { Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { fetchUserInfo } from "../../apis/auth";
export default function MessageChat(porps) {
  const { conversation, user, select } = porps
  const [users, setUser] = useState(null)
  useEffect(() => {
    const friendId = conversation && conversation.member.find(friend => friend !== (user && user.mssv) )
    try {
      const getUser = async () =>{
        const user = await fetchUserInfo(friendId)
        setUser(user)
      }
      getUser()
    } catch (error) {
      console.log(error)
    }
  }, [conversation, user])
  return (
    <div className="chat-item" onClick={()=>select(conversation)}>
      <div className="avatar circle">
        <img src={users && users.avatar} />
      </div>
      <div className="content">
        <b className="name">{users && (users.last_name +" "+ users.first_name)}</b>
      </div>
    </div>
  );
}
