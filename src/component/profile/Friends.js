import { Col, Row } from 'antd'
import React from 'react'

const dummy = ['https://res.cloudinary.com/tlus-image/image/upload/v1638372939/2_d6tqgv.jpg',
    'https://res.cloudinary.com/tlus-image/image/upload/v1638372944/4_t0hmfh.jpg',
    'https://res.cloudinary.com/tlus-image/image/upload/v1638099764/3_hnwghk.jpg',
    'https://res.cloudinary.com/tlus-image/image/upload/v1637611882/1_vzzaaj.jpg',
    'https://res.cloudinary.com/tlus-image/image/upload/v1638373794/selena-gomez-eating-icecream_4096x2734_xtrafondos.com_fk2mma.jpg',
    'https://res.cloudinary.com/tlus-image/image/upload/v1638099764/3_hnwghk.jpg',
    'https://res.cloudinary.com/tlus-image/image/upload/v1637611882/1_vzzaaj.jpg',
    'https://res.cloudinary.com/tlus-image/image/upload/v1638373794/selena-gomez-eating-icecream_4096x2734_xtrafondos.com_fk2mma.jpg',
    'https://res.cloudinary.com/tlus-image/image/upload/v1638372939/2_d6tqgv.jpg',
    'https://res.cloudinary.com/tlus-image/image/upload/v1638372944/4_t0hmfh.jpg',
    'https://res.cloudinary.com/tlus-image/image/upload/v1638099764/3_hnwghk.jpg',
    'https://res.cloudinary.com/tlus-image/image/upload/v1637611882/1_vzzaaj.jpg'
]

export default function Friends() {
    return (
        <div className='profile-posts'>
            <Row>
                <Col span={24}>
                <div className='profile-introduce__overview' style={{ marginTop: '2em' }}>
                        <h2>Bạn bè</h2>
                        <h3>5000 bạn</h3>
                        <Row>
                            {dummy.map((image) => (
                                <div className='preview-friends'>
                                    <img src={image}/>
                                    <span>Selena Gomez</span>
                                </div>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
