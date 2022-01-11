import React, { useRef, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { Row, Col, Input, Avatar } from 'antd'
import { SearchOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from 'react-redux'
import { searchUser } from '../../../apis/auth'
export default function MenuLeft() {
    const router = useRouter()
    const { user } = useSelector(state => state.authReducer)
    const [isSearch, setIsSearch] = useState(false)
    const [tip, setTip] = useState(true)
    const [listFriends, setListFriends] = useState(null)
    const ref = useRef()

    const returnHome = () => {
        router.push('/')
    }
    const handleBlur = (e) =>{
        if(listFriends.last_name > 0 || e.target.value == '' || e.target.value == null || e.target.value == undefined){
            setIsSearch(false)
        }

    }
    const handleSearch = async(e) =>{
        setTip(false)
        const query = e.target.value
        if(query.trim() !== ''){
            try {
                const res = await searchUser(query)
                if(res){
                    setListFriends(res)
                }
            } catch (error) {
                console.log('Failed to search', error)
            }
        }
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
                                    onFocus={() => setIsSearch(true)}
                                    onChange={(e) => handleSearch(e)}
                                    onBlur={(e) => handleBlur(e)}
                                    ref={ref}
                                />
                            </div>
                        </div>
                    </div>
                </Col>
                {isSearch &&
                    <div className='search-header box'>
                        {tip &&
                            <h3>Nhập mssv để tìm</h3>
                        }
                        <div className='search-header__list'>
                            <div>
                                {listFriends && listFriends.length > 0 && listFriends.map((friend, index) =>(
                                    <div className='search-item' key={index} onClick={() => {
                                        router.push(`/${friend.mssv}`)
                                        setIsSearch(false)
                                        ref.current.value == ''
                                        }}>
                                    <Avatar src={friend.avatar}/>
                                    <span style={{ marginLeft: '1vh' }}>{friend.last_name + " " + friend.first_name}</span>
                                    <i>{user.mssv == friend.mssv? '(Bạn)': ''}</i>
                                </div>
                                ))}
                                {listFriends && listFriends.length == 0 && <div>
                                    <h3>Không tìm thấy nội dung</h3>
                                </div>}
                            </div>
                        </div>
                    </div>}
            </Row>
        </div>
    )
}
