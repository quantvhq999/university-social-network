import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchFriends } from '../../apis/auth'
import FriendItem from './FriendItem'

export default function FriendsList() {
    const { user } = useSelector(state => state.authReducer)
    const [friends, setFriends] = useState(null)

    useEffect(() => {
        try {
            const getFriends = async () => {
                const res = await fetchFriends(user?.mssv)
                if (res) {
                    setFriends(res)
                }
            }
            getFriends()
        } catch (error) {
            console.log('Failed to get firends', error)
        }
    }, [user])
    return (
        <div className='friends-request'>
            <h2>Danh sách bạn bè</h2>
            <div className='friends-request__container'>
                <Row>
                    {friends && friends.length > 0 && friends.map((friend, index) => (
                        <Col span={4} key={index}>
                            <FriendItem friend={friend}/>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}
