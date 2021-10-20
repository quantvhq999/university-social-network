import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, Space } from "antd";

export default function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <p style={{fontSize: '1rem',color:'#3a2c8d', fontWeight:'700'}}>Thông tin đăng nhập</p>
            <Form
                name="login"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Nhập mã số sinh viên!' }]}
                >
                    <Input placeholder="Mã số sinh viên" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Nhập mật khẩu!' }]}
                >
                    <Input.Password placeholder="Mật khẩu"/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 24 }}>
                    <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0, span: 24}}>
                    
                    <Space>
          <Button type="primary" htmlType="submit" size="large" ghost="true">
          Đăng nhập
          </Button>
          <Button type="text" htmlType="submit" size="large" >
            Quên mật khẩu
          </Button>
        </Space>
                </Form.Item>
                
            </Form>
        </div>
    )
}
