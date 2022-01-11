import { notification } from 'antd'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { acceptRequest, fetchUserInfo } from '../../apis/auth'

export default function FriendRequestItem(props) {
    const { request } = props
    const [user, setUser] = useState(null)
    const [isAccept, setIsAccept] = useState(false)
    const current = useSelector(state => state.authReducer.user)
    const router = useRouter()

    const openUnfriend = (placement) => {
        notification.success({
          message: `Thông báo`,
          description: "Kết bạn thành công",
          placement,
        });
      };

      const openDeletefriend = (placement) => {
        notification.info({
          message: `Thông báo`,
          description: "Hủy kết bạn",
          placement,
        });
      };

    useEffect(async () => {
        const res = await fetchUserInfo(request.mssv)
        if(res){
            setUser(res)
        }
    }, [user])

    const handleAccept = async () =>{
        setIsAccept(true)
        const request = {
            status:"accept",
            mssv:current?.mssv,
            user: user?.mssv
        }
        const res = await acceptRequest(request)
        if(res){
            openUnfriend("bottomLeft")
        }
    }
    const handleDelete = async () =>{
        setIsAccept(false)
        const request = {
            status:"reject",
            mssv:current?.mssv,
            user: user?.mssv
        }
        const res = await acceptRequest(request)
        if(res){
            openDeletefriend("bottomLeft")
        }
    }
    return (
        <div className='friend-request box'>
            <div className='friend-request__avatar' style={{backgroundImage: `url(${user?.avatar})`}}>
            </div>
            <h3>{user && user.last_name + " " + user.first_name}</h3>
            <div className='friend-request__feature'>
                {!isAccept && <button className='primary' onClick={() => handleAccept()}>Xác nhận</button>}
                {isAccept && <button className='primary' onClick={()=> router.push(`/${user?.mssv}`)}>Truy cập</button>}
                {!isAccept && <button onClick={() => handleDelete()}>Xóa</button>}
            </div>
        </div>
    )
}
