import React, {useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { useRouter } from "next/router";
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'
import MenuMid from './MenuMid'
import { useSelector } from 'react-redux'

export default function MenuTop() {
    const {isLoggedIn} = useSelector(state => state.authReducer)
    const [menu, setMenu] = useState()
    const router = useRouter()
    const query = router.pathname;
    useEffect(() => {
        if(isLoggedIn){
            setMenu(<Row className="homepage">
            <Col className="homepage__left" span={5}>
                <MenuLeft className="homepage__leftMenu"/>
            </Col>
            <Col className="homepage__mid" span={14}>
                <MenuMid className="homepage__mid--menu"/>
            </Col>
            <Col span={5}>
                <MenuRight />
            </Col>
        </Row>)
        }else{
            setMenu(null)
        }
    }, [isLoggedIn])

    useEffect(() => {
        if(query === '/admin'){
            setMenu(null)
        }
    }, [query])
    return (
        <>
        {menu}
        </>
    )
}
