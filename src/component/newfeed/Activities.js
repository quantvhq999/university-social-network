import React from 'react'
import Carousel from 'react-multi-carousel';
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from 'antd';
import ActivitiesItem from './ActivitiesItem';

export default function Activities() {
    const dispatch = useDispatch()
    const activities = useSelector((state) => state.activitiesReducer)
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div>
            <Carousel
               swipeable={false}
               draggable={true}
               responsive={responsive}
               ssr={true} // means to render carousel on server-side.
               customTransition="all .5"
               transitionDuration={500}
               containerClass="carousel-container"
               removeArrowOnDeviceType={["tablet", "mobile"]}
               deviceType={'desktop'}
               dotListClass="custom-dot-list-style"
               itemClass="carousel-item-padding-40-px"
            >
               {activities.data.activities? activities.data.activities.map((item,index)=>{
                   return <ActivitiesItem item={item} key={index}/>
               })
                : <Skeleton active="true"/>
            }
            </Carousel>
        </div>
    )
}
