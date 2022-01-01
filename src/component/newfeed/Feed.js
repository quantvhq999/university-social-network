import React, { useEffect, useState } from 'react'
import { getFeed, getPostProfile } from '../../apis/post'
import FeedItem from './FeedItem'
import { Spin, Alert } from 'antd';

export default function Feed(props) {
    const {user, profile} = props
    const [posts, setPosts] = useState([])
    useEffect(() => {
        if(user){
            const getPosts = async () =>{
                const res =  profile? await getPostProfile(user && user.mssv) : await getFeed(user && user.mssv)
                setPosts(res)
            }
            getPosts()
        }
    }, [user])
    return (
        <div className="feed-container">
            {
                posts && posts.length > 0 ? posts.map((post,index) =>(
                    <FeedItem key={index} post={post} userCurrent={user}/>
                )): <Spin size='large' tip="Đang tải...">
                <Alert
                  message=" "
                  description=" "
                  type="info"
                />
              </Spin>
            }
        </div>
    )
}
