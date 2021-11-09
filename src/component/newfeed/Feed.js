import React from 'react'
import FeedItem from './FeedItem'

export default function Feed(props) {
    return (
        <div className="feed-container">
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
        </div>
    )
}
