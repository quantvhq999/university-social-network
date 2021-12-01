import { Col, Row } from 'antd'
import React from 'react'
import IconText from '../items/IconText'
import TextRound from '../items/TextRound'
import FeedItem from '../newfeed/FeedItem'
import NewPost from '../newfeed/NewPost'

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
export default function Posts(props) {
    /// Initials
    const { user } = props
    return (
        <div className="profile-post">
            <Row>
                <Col span={9}>
                    <div className="profile-post__introduce">
                        <h2>Giới thiệu</h2>
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
                    <div className="profile-post__introduce" style={{ marginTop: '1em' }}>
                        <h2>Ảnh</h2>
                        <Row>
                            {dummy.slice(0, 9).map((image) => (
                                <div className='preview-image'>
                                    <img src={image} />
                                </div>
                            ))}
                        </Row>
                        <a href="#">Xem thêm</a>
                    </div>
                    <div className="profile-post__introduce" style={{ marginTop: '1em' }}>
                        <h2>Bạn bè</h2>
                        <h3>5000 bạn</h3>
                        <Row>
                            {dummy.slice(0, 9).map((image) => (
                                <div className='preview-friends'>
                                    <img src={image} />
                                    <span>Selena Gomez</span>
                                </div>
                            ))}
                        </Row>
                        <a href="#">Xem thêm</a>
                    </div>
                </Col>
                <Col span={15}>
                    <div style={{ marginLeft: '1em' }}>
                        <NewPost />
                    </div>
                    <div className="profile-post__posts">
                        <FeedItem />
                        <FeedItem />
                        <FeedItem />
                        <FeedItem />
                        <FeedItem />
                        <FeedItem />
                        <FeedItem />
                        <FeedItem />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
