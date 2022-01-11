import { Col, Row } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import FriendsRequest from '../component/friends/FriendsRequest'
import FriendsList from '../component/friends/FriendsList'
import FriendsBirthDay from '../component/friends/FriendsBirthDay'

export default function Friends() {
    const [page, setPage] = useState(1)

    const handlePage = () => {
        switch (page) {
            case 1:
                return <FriendsRequest />
            case 2:
                return <FriendsList />
            default:
                return <FriendsRequest />
        }
    }
    return (
        <div className='friends-container'>
            <Head>
                <title>Bạn bè | TLS</title>
            </Head>
            <Row>
                <Col span={6} className='box' style={{ height: '90vh' }}>
                    <div className='friends-container__header'>
                        <Avatar src='/assets/icon/friends.png' size={'large'} shape='circle' />
                        <span>Bạn bè</span>
                    </div>
                    <div className='friends-menu' onClick={() => setPage(1)}>
                        <span className='friends-menu__text'>Lời mời kết bạn</span>
                    </div>
                    <div className='friends-menu' onClick={() => setPage(2)}>
                        <span className='friends-menu__text' >Danh sách bạn bè</span>
                    </div>
                </Col>
                <Col span={18}>
                    <div className='friends-container__main'>
                        {handlePage()}
                    </div>
                </Col>
            </Row>
        </div>
    )
}
