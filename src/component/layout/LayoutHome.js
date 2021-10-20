import React from 'react'
import { Row, Col, Button } from "antd";
export default function LayoutHome(props) {
    return (
        <div style={{ height: "100vh" }}>
            <Row className='container'>
                <Col span={8} className='container__left'>
                    <div className='container__left__head'></div>
                    <div className='container__left__body'>
                        <p className='container__left__body--slogan'>
                            Đoàn kết - Chính trực<br />Tôn trọng - Chất lượng - Khát vọng vươn lên
                        </p>
                        <p className="container__left__body--description">
                            Năng động, cập nhật kiến thức và áp dụng sáng tạo trong công việc.
                        </p>
                        <p className="container__left__body--description">
                            Có đạo đức, lương tâm nghề nghiệp, ý thức kỷ luật và thái độ phục vụ tốt.
                        </p>
                        <Button type="primary" ghost="true" size="large">Đăng nhập</Button>
                    </div>
                    <div className='container__left__footer'>

                    </div>
                </Col>
                <Col span={16} >
                    <div>sad</div>
                    <div>sad</div>
                    <div>sad</div>
                </Col>
            </Row>
        </div>
    )
}
