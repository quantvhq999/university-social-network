import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Row, Col, Input, Badge, Avatar, Menu, Dropdown } from 'antd'
import { CommentOutlined, BellOutlined, CaretDownOutlined } from '@ant-design/icons'

import { logoutRequest } from '../../../redux/actions/authAction'

export default function MenuRight(props) {
    const dispatch = useDispatch()
    const router = useRouter()
    const handleLogout = async ()=>{
        dispatch(logoutRequest())
        router.push('/')
    }
    const {user, isLoggesIn} = useSelector(state => state.authReducer)
    
    const menu = (
        <Menu style={{ textAlign: 'center' }}>
            <Menu.Item key="0">
                <a onClick={()=>{router.push(`${user && user.mssv}`)}}>Trang cá nhân</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <a href="#">Đóng góp ý kiến</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2">
                <a onClick={handleLogout}>Đăng xuất</a>
            </Menu.Item>
        </Menu>
    );
    
    return (
        <Row>
            <Col span={24} >
                <div className="nav__menu right">
                    <div className='nav__menu--item'>
                        <Row style={{ width: '100%', height: '100%' }} align="middle" justify="center">
                            <Col span={5}>
                                <a className="icon"><CommentOutlined /></a>
                            </Col>
                            <Col span={14}>
                                <Row style={{ width: '100%', height: '100%' }} align="middle" >
                                    <Col onClick={()=>{router.push(`${user && user.mssv}`)}} span={12}><Avatar style={{ cursor: 'pointer' }} src={user?.avatar} /></Col>
                                    <Col span={12} style={{ fontSize: '1rem' }}>
                                        <Row>
                                            <Col span={12}>{user && user.first_name}</Col>
                                            <Col span={12}>
                                                <Dropdown overlay={menu} trigger={['click']}>
                                                    <a className="icon" onClick={e => e.preventDefault()}><CaretDownOutlined /></a>
                                                </Dropdown>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
