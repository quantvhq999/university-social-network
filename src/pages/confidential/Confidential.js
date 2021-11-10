import React from 'react'
import { Tabs } from 'antd'
import { FireOutlined, AppstoreOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;
export default function Confidential() {
    return (
        <div className="confidential-container">
            <h1 className="title">Tâm sự ẩn danh</h1>
            <div style={{display: "flex", justifyContent: "flex-end", marginRight: "2vh"}}>
                <a className="add-btn">Tâm sự tí</a>
                <a className="update-btn">Cập nhật</a>
            </div>
            <Tabs defaultActiveKey="1" tabPosition={"left"} style={{ height: 220 }}>
                <TabPane
                    tab={<span> <AppstoreOutlined />Tất cả bài viết</span>} key={1}>
                    <p>Tất cả bài viết</p>
                </TabPane>
                <TabPane
                    tab={<span> <FireOutlined />Bài viết thịnh hành</span>} key={2}>
                    Bài viết thịnh hành
                </TabPane>

            </Tabs>
        </div>
    )
}
