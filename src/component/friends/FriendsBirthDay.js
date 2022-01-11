import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchFriends } from '../../apis/auth'
import BirthDayItem from './BirthDayItem'

const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
export default function FriendsBirthDay() {
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
            <h2>Sinh nhật</h2>

            {friends && friends.length > 0 && friends.map((friend, index) => (
                <Row key={index}>
                    <Col span={5}>
                    </Col>
                    <Col span={14}>
                        <BirthDayItem friend={friend} />
                    </Col>
                    <Col span={5}>
                    </Col>
                </Row>
            ))}

        </div>
    )
}
