import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { fetchFriends } from '../../apis/auth'


export default function Friends(props) {
    const {user} = props
    const [listFriend, setListFriend] = useState(null)
    const router = useRouter()
    useEffect(async () => {
        const res = await fetchFriends(router.query.user)
        if(res){
            setListFriend(res)
        }
    }, [user])
    return (
        <div className='profile-posts'>
            <Row>
                <Col span={24}>
                <div className='profile-introduce__overview' style={{ marginTop: '2em' }}>
                        <h2>Bạn bè</h2>
                        <h3>{listFriend && listFriend.length} bạn</h3>
                        <Row>
                            {listFriend && listFriend.length > 0  && listFriend.map((friend) => (
                                <div className='preview-friends' onClick={() => router.push(`/${friend.mssv}`)}>
                                     <img src={friend.avatar} />
                                    <span>{friend.last_name + " " + friend.first_name}</span>
                                </div>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
