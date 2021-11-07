import React from 'react'
import { Row, Col } from "antd";

import MenuTop from '../../component/header/menu/MenuTop'
import MenuItem from '../../component/items/MenuItem';
import NewsFeed from '../../component/newfeed/NewsFeed';
export default function HomePage() {
    return (
        <>
            <MenuTop />
            <Row style={{marginTop: '30px'}}>
                <Col span={5}>
                    <MenuItem/>
                </Col>
                <Col span={14}>
                    Mid
                </Col>
                <Col span={5}>
                    Right
                </Col>
            </Row>
        </>
    )
}
