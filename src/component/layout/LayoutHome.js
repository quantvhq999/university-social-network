import React from 'react'
import { Row, Col, Button } from "antd";

export default function LayoutHome(props) {
    return (
        <div>
            <Row>
                <Col span={8}>
                    <Button type="primary">A</Button>
                </Col>
                <Col span={16}>
                    <Button type="primary">A</Button>
                </Col>
            </Row>
        </div>
    )
}
