import { Col, Row } from 'antd'
import { Router, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { fetchFriends, fetchImages } from '../../apis/auth'
import IconText from '../items/IconText'
import TextRound from '../items/TextRound'
import Feed from '../newfeed/Feed'
import NewPost from '../newfeed/NewPost'

export default function Posts(props) {
    /// Initials
    const { user, friend, reload } = props
    const [friends, setFriends] = useState([])
    const [images, setImages] = useState([])
    /// Hook
    const router = useRouter()
    /// Handle friend
    const handleFriend = (friend) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        router.push(`/${friend.mssv}`, null, { shallow: true })
    }
    useEffect(() => {
        const getFriends = async () => {
            try {
                const res = await fetchFriends(router.query.user)
                setFriends(res)
            } catch (error) {
                console.log('Failed to get friends', error)
            }
        }
        getFriends()
    }, [user])
    useEffect(() => {
        const getImages = async () => {
            try {
                const res = await fetchImages(user && user.mssv)
                setImages(res)
            } catch (error) {
                console.log('Failed to get friends', error)
            }
        }
        getImages()
    }, [user])
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
                        <a>Cập nhật sở thích</a>
                    </div>
                    <div className="profile-post__introduce" style={{ marginTop: '1em' }}>
                        <h2>Ảnh</h2>
                        <Row>
                            {images.map((image) => (
                                <div className='preview-image' onClick={() => router.push(`/post/${image._id}`)}>
                                    <img src={image.image} />
                                </div>
                            ))}
                        </Row>
                    </div>
                    <div className="profile-post__introduce" style={{ marginTop: '1em' }}>
                        <h2>Bạn bè</h2>
                        <h3>{`${friends.length} bạn`}</h3>
                        <Row>
                            {friends && friends.length > 0 && friends.map((friend) => (
                                <div className='preview-friends' onClick={() => handleFriend(friend)}>
                                    <img src={friend.avatar} />
                                    <span>{friend.last_name + " " + friend.first_name}</span>
                                </div>
                            ))}
                        </Row>
                        <a onClick={() => friend()}>Xem thêm</a>
                    </div>
                </Col>
                <Col span={15}>
                    <div style={{ marginLeft: '1em' }}>
                        <NewPost />
                    </div>
                    <div className="profile-post">
                        <Feed user={user} profile={true} reload={reload} type={'profile'} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
