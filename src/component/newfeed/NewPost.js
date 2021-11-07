import { Avatar, Col, Input, Row } from 'antd'
import React from 'react'
import "../../../public/assets/icon/camera.png"
export default function NewPost() {
    return (
        <div className="new-post">
            <div className="new-post__container">
                <Row style={{ height: '100%' }}>
                    <Col span={4} style={{ marginTop: '21px' }}>
                        <Avatar size="large" style={{ cursor: 'pointer' }} src="https://joeschmoe.io/api/v1/random" />
                    </Col>
                    <Col span={20} style={{ marginTop: '21px' }}>
                        <Input placeholder="Bạn đang nghĩ gì?" />
                    </Col>
                </Row>
            </div>
            <Row className="btn_container">
                    <Col span={12}>
                        <div className="post_btn">
                            <img src='/assets/icon/camera.png'/>
                            <span>Ảnh/Video</span>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="post_btn">
                            <img src='/assets/icon/emoji.png' />
                            <span>Cảm xúc</span>
                        </div>
                    </Col>
                </Row>
        </div>
    )
}
