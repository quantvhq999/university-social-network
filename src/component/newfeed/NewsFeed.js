import React from 'react'
import Activities from './Activities'
import Feed from './Feed'
import NewPost from './NewPost'

export default function NewsFeed() {
    return (
        <div style={{marginLeft:'6vh', marginRight:'6vh'}}>
            <Activities />
            <NewPost />
            <Feed />
        </div>
    )
}
