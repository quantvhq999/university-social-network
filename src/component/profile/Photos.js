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

export default function Photos() {
    return (
        <div className="profile-photos">
            <Row>
                <Col span={24}>
                <div className="profile-post__introduce" style={{ marginTop: '1em' }}>
                        <h2>Ảnh</h2>
                        <Row>
                            {dummy.slice(0, 9).map((image) => (
                                <div className='photo'>
                                    <img src={image} />
                                </div>
                            ))}
                        </Row>
                        <a href="#">Xem thêm</a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
