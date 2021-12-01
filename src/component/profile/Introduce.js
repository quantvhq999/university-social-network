import { Col, Row } from 'antd'
import React from 'react'
import IconText from '../items/IconText'
import TextRound from '../items/TextRound'

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
export default function Introduce() {
    return (
        <div className='profile-introduce'>
            <Row>
                <Col span={24}>
                    <div className='profile-introduce__overview'>
                        <h2>Tổng quan</h2>
                        <IconText icon={'/assets/icon/school.png'} text={'Phân hiệu Đại Học Thủy Lợi TP. HCM'} />
                        <IconText icon={'/assets/icon/backpack.png'} text={'Lớp S20-K59TH01'} />
                        <IconText icon={'/assets/icon/location.png'} text={'Đến từ TP. HCM'} />
                        <IconText icon={'/assets/icon/lifestyle.png'} text={'Sở thích'} />
                        <Row>
                            <TextRound text={'Nấu ăn'} />
                            <TextRound text={'Đá bóng'} />
                            <TextRound text={'Ngủ'} />
                        </Row>
                    </div>
                    <div className='profile-introduce__overview' style={{ marginTop: '2em' }}>
                        <h2>Bạn bè</h2>
                        <h3>5000 bạn</h3>
                        <Row>
                            {dummy.slice(0, 8).map((image) => (
                                <div className='preview-friends'>
                                    <img src={image}/>
                                    <span>Selena Gomez</span>
                                </div>
                            ))}
                        </Row>
                    </div>
                    <div className='profile-introduce__overview' style={{ marginTop: '2em' }}>
                        <h2>Nhóm</h2>
                        <h3>5000 bạn</h3>
                        <Row>
                            {dummy.slice(0, 8).map((image) => (
                                <div className='preview-friends'>
                                    <img src={image}/>
                                    <span>Câu lạc bộ yêu nồi cơm điện</span>
                                </div>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
