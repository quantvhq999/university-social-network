import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Activities from './Activities'
import Feed from './Feed'
import NewPost from './NewPost'

export default function NewsFeed() {
    const { user } = useSelector(state => state.authReducer)
    const [newPost, setNewPost] = useState(null)
    return (
        <div style={{marginLeft:'6vh', marginRight:'6vh'}} className="feed_middle">
            <Activities />
            <div style={{marginTop:'21px'}}>
            <NewPost user={user} newPost={setNewPost}/>
            </div>
            <Feed user={user} newPost={newPost}/>
        </div>
    )
}
