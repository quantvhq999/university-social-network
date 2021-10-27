import React from 'react'
import { Row, Col } from 'antd'
import { HomeOutlined, ApartmentOutlined, BookOutlined, TeamOutlined } from '@ant-design/icons'

export default function MenuLMid() {
    return (
        <Row>
            <Col span={24} className="nav_mid" >
                <div className="nav__menu mid">
                    <div className='nav__menu--item'>
                        <Row align="middle" justify="center" style={{height:'100%'}}>
                            <Col span={6}>
                                <div className='nav__menu--item---home'>
                                    <a className="icon"><HomeOutlined /></a>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className='nav__menu--item---friends'>
                                <a className="icon"><TeamOutlined /></a>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className='nav__menu--item---group'>
                                <a className="icon"><ApartmentOutlined /></a>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className='nav__menu--item---document'>
                                <a className="icon"> <BookOutlined /></a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
