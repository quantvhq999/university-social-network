import React from 'react'
import { Row, Col } from "antd";

import MenuTop from '../../component/header/menu/MenuTop'
import MenuItem from '../../component/items/MenuItem';
import NewsFeed from '../../component/newfeed/NewsFeed';
import Message from '../../component/message/Message';
export default function HomePage() {
    return (
        <>
            <MenuTop />
            <Row style={{marginTop: '20px'}}>
                <Col span={5}>
                    <MenuItem/>
                </Col>
                <Col span={14}>
                    <NewsFeed />
                </Col>
                <Col span={5}>
                    <Message />
                </Col>
            </Row>
        </>
    )
}
