import { Avatar } from 'antd'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchUserInfo } from '../../apis/auth'
import moment from "moment";

export default function CommentItem(props) {
    const { comment } = props
    const [user, setUser] = useState(null)
    moment.locale("vi");
    useEffect(async () => {
       try {
           const res = await fetchUserInfo(comment.mssv)
           if(res){
               setUser(res)
           }
       } catch (error) {
           console.log('Failed to get user', error)
       }
    }, [comment])
    return (
        <div className='comment-item'>
            <Avatar size="large"
            style={{ cursor: "pointer" }}
            src={user && user.avatar}
            />
            <div className='text box'>
                <b>{user && user.last_name + " " + user.first_name}</b><br/>
                <span>{comment.content}</span>
            </div>
            <span style={{marginLeft: '1vw'}}>{moment
                .utc(comment && comment.createdAt)
                .local()
                .startOf("seconds")
                .fromNow()}</span>
        </div>
    )
}
