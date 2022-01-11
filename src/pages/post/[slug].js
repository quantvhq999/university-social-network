import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getPost } from '../../apis/post'
import FeedItem from '../../component/newfeed/FeedItem'

export default function PostView() {
    const router = useRouter()
    const { user } = useSelector(state => state.authReducer)
    const [post, setPost] = useState(null)
    useEffect(() => {
        const getPostView = async () =>{
            try {
                const res = await getPost(router.query?.slug)
                if(res){
                    setPost(res)
                }
            } catch (error) {
                console.log(error)
                router.push('/404')
            }
        }
        getPostView()
    }, [router.query?.slug])

    return (
        <div style={{ margin: '2vh' }}>
            {post?<Row>
                <Col span={6}>
                    <Button shape='circle' type="primary" icon={<ArrowLeftOutlined />} onClick={()=> router.back()}>
                    </Button>
                </Col>
                <Col span={12}>
                    <div className="feed-container" >
                        <FeedItem  post={post} userCurrent={user}/>
                    </div>
                </Col>
                <Col span={6}></Col>
            </Row>:
            <></>}
        </div>
    )
}
