import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Carousel } from "antd";
import iconSoical from "../../data/icon-soical.json"
import logo from "../../data/image.json"
import classNames from 'classnames';
import Login from '../../pages/auth/login';

export default function LayoutHome(props) {
    const [body, setBody] = useState(true)

    return (
        <div style={{ height: "100vh" }}>
            <Row className='container'>
                <Col span={8} className='container__left'>
                    <div className='container__left__head'>
                        <div className='container__left__head--logo'>
                            <img src={logo.logo} />
                        </div>
                    </div>
                    <div className='container__left__body'>
                        <div className={body?'container__left__body--login': 'container__left__body--login display'}>
                        <Login/>
                        </div>
                        <div className={body ? '' : 'fly-out'}>
                            <p className='container__left__body--slogan' style={{textAlign: "center"}}>
                                Đoàn kết - Chính trực<br />Tôn trọng - Chất lượng - Khát vọng vươn lên
                            </p>
                            <p className="container__left__body--description" style={{textAlign: "center"}} >
                                Năng động, cập nhật kiến thức và áp dụng sáng tạo trong công việc.
                                Có đạo đức, lương tâm nghề nghiệp, ý thức kỷ luật và thái độ phục vụ tốt.
                            </p>
                            <div style={{display: "flex", justifyContent:"center"}}>
                            <Button type="primary" ghost="true" size="large" onClick={() => setBody(!body)}>Đăng nhập</Button>
                            </div>
                        </div>
                    </div>
                    <div className='container__left__footer'>
                        <ul>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/phanhieuthuyloi"><img className="icon" src={iconSoical.icon.facebook} /></a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCmxnK89RTcty0KS2qJzEA7A"><img className="icon" src={iconSoical.icon.youtube} /></a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://tlus.edu.vn/"><img className="icon" src={iconSoical.icon.internet} /></a></li>
                            <li><img className="icon" src={iconSoical.icon.telephone} /> 083 899 0357</li>
                        </ul>
                    </div>
                </Col>
                <Col span={16} className='container__right' >
                    <div className='container__right__head'>
                        <h2>PHÂN HIỆU ĐẠI HỌC THỦY LỢI</h2>
                    </div>
                    <div className='container__right__body'>
                        <Carousel autoplay >
                            <div>
                                <div className="container__right__body--slideShow">
                                    <img src="/assets/image/1.jpg" />
                                </div>
                            </div>
                            <div>
                                <div className="container__right__body--slideShow">
                                    <img src="/assets/image/2.jpg" />
                                </div>
                            </div>
                            <div>
                                <div className="container__right__body--slideShow">
                                    <img src="/assets/image/3.jpg" />
                                </div>
                            </div>
                            <div>
                                <div className="container__right__body--slideShow">
                                    <img src="/assets/image/4.jpg" />
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    <div className='container__right__footer'></div>
                </Col>
            </Row>
        </div>
    )
}
