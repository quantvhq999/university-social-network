import React from 'react'
import { Button, Tooltip, Badge } from 'antd';
import { SettingOutlined, NotificationOutlined } from '@ant-design/icons';

export default function AdminHeader() {
    return (
        <div className='admin-header box'>
            <h3>Welcome Admin</h3>
            <div className='feature'>
                <Button style={{marginLeft: '3px'}} type='danger'>Đăng xuất</Button>
            </div>
        </div>
    )
}
