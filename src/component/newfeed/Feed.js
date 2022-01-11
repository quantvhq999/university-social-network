import React, { useEffect, useState } from 'react'
import { getFeed, getPostProfile } from '../../apis/post'
import FeedItem from './FeedItem'
import { Spin, Alert } from 'antd';
import { useSelector } from 'react-redux';

export default function Feed(props) {
    const {user, profile, type, newPost} = props
    const [posts, setPosts] = useState([])
    const [reload, setReload] = useState(false)
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
        <div className="feed-container" style={type==='profile'? {height: 'auto'}:{}}>
            {newPost?
            <FeedItem post={newPost} userCurrent={user} reload={reload} setLoad={setReload}/>
            :<></>
            }
            {
                posts && posts.length > 0 ? posts.map((post,index) =>(
                    <FeedItem key={index} post={post} userCurrent={user} reload={reload} setLoad={setReload}/>
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
