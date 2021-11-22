import React, { useState } from "react";
import { Tabs, Modal, Form, Input, Button } from "antd";
import {
    FireOutlined,
    AppstoreOutlined,
    SwitcherOutlined,
    AimOutlined,
} from "@ant-design/icons";
import ConfidentialGroup from "./ConfidentialGroup";
import { useDispatch, useSelector } from "react-redux";
import { fetchConfidentialsRequest } from "../../redux/actions/confidentialAction";
import TextArea from "rc-textarea";
const { TabPane } = Tabs;
export default function Confidential() {
    ///State
    const [isModalVisible, setIsModalVisible] = useState(false);

    const dispatch = useDispatch();
    dispatch(fetchConfidentialsRequest());

    /// Confidential form action
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    ///Modal
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    /// Handle form submit

    return (
        <div className="confidential-container">
            <h2 style={{ textAlign: "center" }} className="title">
                Tâm sự tuổi hồng
            </h2>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: "2vh",
                }}
            >
                <a className="add-btn" onClick={showModal}>
                    Tâm sự tí
                </a>
                {/* Modal post */}
                <Modal
                    className="confidential-modal"
                    title="Thêm bài viết"
                    visible={isModalVisible}
                    width={1000}
                    footer={null}
                >
                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="title"
                            rules={[{ required: true, message: 'Nhập tiêu đề bài viết!' }]}
                        >
                            <Input placeholder="Nhập tiêu đề bài viết" />
                        </Form.Item>

                        <Form.Item
                            name="content"
                            rules={[{ required: true, message: 'Nhập nội dung bài viết!' }]}
                        >
                            <TextArea rows={10} className="confidential-content" placeholder={"Nhập nội dung"} />
                        </Form.Item>
                        <Form.Item className='btn-group'>
                            <div>
                                <Button type="primary" htmlType="submit">
                                    Đăng bài viết
                                </Button>
                                <Button type="light" onClick={handleCancel}>
                                    Hủy
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                    <i>Sử dụng chuột phải để thêm biểu tượng cảm xúc</i>
                </Modal>
                <a className="update-btn">Cập nhật</a>
            </div>
            <Tabs className="tab-container" defaultActiveKey="1" tabPosition={"left"}>
                <TabPane
                    tab={
                        <span>
                            <AimOutlined />
                            Bài viết hôm nay
                        </span>
                    }
                    key={1}
                >
                    <ConfidentialGroup />
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            {" "}
                            <FireOutlined />
                            Bài viết thịnh hành
                        </span>
                    }
                    key={2}
                >
                    Bài viết thịnh hành
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            {" "}
                            <AppstoreOutlined />
                            Tất cả bài viết
                        </span>
                    }
                    key={3}
                >
                    <p>Tất cả bài viết</p>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            {" "}
                            <SwitcherOutlined />
                            Bài viết của bạn
                        </span>
                    }
                    key={4}
                >
                    Bài viết của bạn
                </TabPane>
            </Tabs>
        </div>
    );
}
