import React from 'react'
import { Row, Col, Tooltip } from 'antd'
import { HomeOutlined, ApartmentOutlined, BookOutlined, TeamOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'


export default function MenuLMid() {
    const router = useRouter()
    return (
        <Row>
            <Col span={24} className="nav_mid" >
                <div className="nav__menu mid">
                    <div className='nav__menu--item'>
                        <Row align="middle" justify="center" style={{ height: '100%' }}>
                            <Col span={8}>
                                <div className='nav__menu--item---home'>
                                    <Tooltip title="Trang chủ" color={'#3a2c8d'} key={'#3a2c8d'}>
                                        <a className="icon" onClick={()=>{router.push('/')}}><HomeOutlined /></a>
                                    </Tooltip>
                                </div>

                            </Col>
                            <Col span={8}>
                                <div className='nav__menu--item---friends'>
                                    <Tooltip title="Bạn bè" color={'#3a2c8d'} key={'#3a2c8d'}>
                                        <a className="icon" onClick={()=>{router.push('/friends')}}><TeamOutlined /></a>
                                    </Tooltip>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className='nav__menu--item---document'>
                                    <Tooltip title="Tài liệu" color={'#3a2c8d'} key={'#3a2c8d'}>
                                        <a className="icon" onClick={()=>{router.push('/documents')}}> <BookOutlined /></a>
                                    </Tooltip>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
