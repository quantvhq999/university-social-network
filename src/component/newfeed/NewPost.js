import { Avatar, Col, Input, Row } from 'antd'
import React from 'react'
import "../../../public/assets/icon/camera.png"
import { useSelector } from "react-redux";
export default function NewPost() {
    const {user} = useSelector(state => state.authReducer)
    return (
        <div className="new-post">
            <div className="new-post__container">
                <Row style={{ height: '100%' }}>
                    <Col span={4} style={{ marginTop: '21px' }}>
                        <Avatar size="large" style={{ cursor: 'pointer' }} src={user && user.avatar} />
                    </Col>
                    <Col span={20} style={{ marginTop: '21px' }}>
                        <Input placeholder="Bạn đang nghĩ gì?"/>
                    </Col>
                </Row>
            </div>
            <Row className="btn_container">
                    <Col span={24}>
                        <div className="post_btn">
                            <img src='/assets/icon/camera.png'/>
                            <span>Bài viết</span>
                        </div>
                    </Col>
                </Row>
        </div>
    )
}
