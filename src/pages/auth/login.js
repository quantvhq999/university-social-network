import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Checkbox, Space, Carousel, message } from "antd";

import { loginRequest } from "../../redux/actions/authAction";
export default function Login() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const [isDisalble, setIsDisable] = useState(false);//disable button when sigin
    const [isIncorrect, setIsInCorrect] = useState(true)
    const resetPassword = React.createRef()

    const onFinish = (values) => {
        setIsLoading(true)
        setIsDisable(true)
        setIsInCorrect(true)
        dispatch(loginRequest(values)).then(() => {
            setIsLoading(false)
            setIsDisable(false)
        }).catch(() => {
            setIsLoading(false)
            setIsDisable(false)
            setIsInCorrect(false)
        })
    };
    const onFinishReset = (value) => {
        message.success('Mật khẩu đã được đặt lại')
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinishFailedReset = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <div>
            <p style={{ fontSize: '1rem', color: '#3a2c8d', fontWeight: '700' }}>Thông tin đăng nhập</p>
            <div>
           
            <Carousel ref={resetPassword} dots="false">
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
                        name="mssv"
                        rules={[{ required: true, message: 'Nhập mã số sinh viên!' }]}
                    >
                        <Input placeholder="Mã số sinh viên" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Nhập mật khẩu!' }]}
                    >
                        <Input.Password placeholder="Mật khẩu" />
                    </Form.Item>
                    <Form.Item hidden={isIncorrect}>
                        <span style={{ color: '#ff4d4f' }}>Sai thông tin đăng nhập</span>
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 24 }}>
                        <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                        <Space>
                            <Button type="primary" htmlType="submit" size="large" ghost="true" loading={isLoading} disabled={isDisalble}>
                                Đăng nhập
                            </Button>
                            <Button type="text" size="large" onClick={() => { resetPassword.current.next() }}>
                                Quên mật khẩu
                            </Button>
                        </Space>
                    </Form.Item>

                </Form>
                <Form
                    name="reset"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinishReset}
                    onFinishFailed={onFinishFailedReset}
                    autoComplete="on"
                >
                    <Form.Item
                        name="mssv_reset"
                        rules={[{ required: true, message: 'Nhập CMND/CCCD' }]}
                    >
                        <Input placeholder="Nhập CMND/CCCD" />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                        <Space>
                            <Button type="primary" size="large" ghost="true" onClick={() => { resetPassword.current.prev() }}>
                                Quay lại
                            </Button>
                            <Button type="text" htmlType="submit" size="large">
                                Đặt lại mật khẩu
                            </Button>
                        </Space>
                    </Form.Item>

                </Form>
            </Carousel>
            </div>
        </div>
    )
}
