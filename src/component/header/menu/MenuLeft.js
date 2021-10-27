import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { Row, Col, Input } from 'antd'
import { SearchOutlined } from "@ant-design/icons"
export default function MenuLeft() {
    const router = useRouter()
    const returnHome = () => {
        router.push('/')
    }
    return (
        <div>
            <Row>
                <Col span={24} >
                    <div className='left'>
                        <div className="nav__menu">
                            <a onClick={returnHome}><img src="/assets/image/logo.png" /></a>
                            <div>
                                <Input
                                    placeholder="Tìm kiếm trên tlus"
                                    prefix={<SearchOutlined className="site-form-item-icon" />}
                                />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
