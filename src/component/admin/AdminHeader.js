import React from 'react'
import { Button, Tooltip, Badge } from 'antd';
import { SettingOutlined, NotificationOutlined } from '@ant-design/icons';

export default function AdminHeader() {
    return (
        <div className='admin-header box'>
            <h3>Welcome Admin</h3>
            <div className='feature'>
                <Tooltip title="Cài đặt">
                    <Button  style={{marginRight: '9px'}} type="primary" shape="circle" icon={<SettingOutlined />} />
                </Tooltip>
                <Badge count={8} style={{marginRight: '9px'}}>
                    <Button style={{marginRight: '9px'}} type="primary" shape="circle" icon={<NotificationOutlined />} />
                </Badge>
                <Button style={{marginLeft: '3px'}} type='danger'>Đăng xuất</Button>
            </div>
        </div>
    )
}
