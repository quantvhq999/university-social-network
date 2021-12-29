import React, { useEffect, useState } from 'react'
import { getFeed } from '../../apis/post'
import FeedItem from './FeedItem'

export default function Feed(props) {
    const {user} = props
    const [posts, setPosts] = useState([])
    useEffect(() => {
        if(user){
            const getPosts = async () =>{
                const res = await getFeed(user && user.mssv)
                setPosts(res)
            }
            getPosts()
        }
    }, [user])
    return (
        <div className="feed-container">
            {
                posts && posts.length > 0 && posts.map((post,index) =>(
                    <FeedItem key={index} post={post} userCurrent={user}/>
                ))
            }
        </div>
    )
}
