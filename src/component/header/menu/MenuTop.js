import React from 'react'
import { Row, Col } from 'antd'

import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'
import MenuMid from './MenuMid'
export default function MenuTop() {
    return (
        <Row className="homepage">
                <Col className="homepage__left" span={5}>
                    <MenuLeft className="homepage__leftMenu"/>
                </Col>
                <Col className="homepage__mid" span={14}>
                    <MenuMid className="homepage__mid--menu"/>
                </Col>
                <Col span={5}>
                    <MenuRight/>
                </Col>
            </Row>
    )
}
