import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchFriendsRequest } from '../../apis/auth'
import FriendRequestItem from './FriendRequestItem'

export default function FriendsRequest() {
    const { user } = useSelector(state => state.authReducer)
    const [request, setRequest] = useState(null)

    useEffect(async () => {
        const res = await fetchFriendsRequest(user?.mssv)
        if (res) {
            setRequest(res)
        }
    }, [user])

    return (
        <div className='friends-request'>
            <h2>Lời mời kết bạn</h2>
            <div className='friends-request__container'>
                <Row>
                    {request && request.length == 0 &&
                    <h2>Không có lời mời kết bạn</h2>
                    }
                   {request && request.length > 0 && request.filter(item => item.status == 'pending').map((item, index) =>(
                        <Col span={4} key={index}>
                        <FriendRequestItem request={item}/>
                    </Col>
                   ))}
                </Row>
            </div>
        </div>
    )
}
