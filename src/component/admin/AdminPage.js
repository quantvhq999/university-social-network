import { Col, Row } from 'antd'
import React, { useState } from 'react'
import AdminHeader from './AdminHeader'
import AdminMain from './AdminMain'
import AdminSideBar from './AdminSideBar'
import AdminStudents from './AdminStudents'
import AdminActivities from './AdminActivities'
import AdminLibrary from './AdminLibrary'
import AdminGroups from './AdminGroups'
import AdminBanners from './AdminBanner'
import AdminFeedback from './AdminFeedback'
export default function AdminPage() {
    const [side, setSide] = useState(1)
    return (
        <div className='admin-container'>
            <Row>
                <Col span={4}>
                    <AdminSideBar side={setSide} />
                </Col>
                <Col span={20}>
                    <AdminHeader />
                    {side === 1?<AdminMain side={setSide}/>:<></>}
                    {side === 2?<AdminStudents />:<></>}
                    {side === 3?<AdminActivities />:<></>}
                    {side === 4?<AdminLibrary />:<></>}
                    {side === 5?<AdminGroups />:<></>}
                    {side === 6?<AdminBanners />:<></>}
                    {side === 7?<AdminFeedback />:<></>}
                </Col>
            </Row>
        </div>
    )
}
