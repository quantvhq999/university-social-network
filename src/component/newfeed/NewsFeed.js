import React from 'react'
import { useSelector } from 'react-redux'
import Activities from './Activities'
import Feed from './Feed'
import NewPost from './NewPost'

export default function NewsFeed() {
    const { user } = useSelector(state => state.authReducer)
    return (
        <div style={{marginLeft:'6vh', marginRight:'6vh'}} className="feed_middle">
            <Activities />
            <div style={{marginTop:'21px'}}>
            <NewPost user={user}/>
            </div>
            <Feed user={user}/>
        </div>
    )
}
