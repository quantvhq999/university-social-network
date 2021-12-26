import { Modal } from "antd";
import React, { useRef, useState } from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

export default function ModalImageUpdate(props) {
  const { show, setShow, title } = props;
  const [files, setFiles] = useState([]);

  const handleFile = (e) => {
      alert('change')
    setFiles(e.target.files);
  };
  const ref = useRef(null);

  const handleOk = () => {
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
  };

  const handleClickUpload = () => {
    ref.current.click();
  };
  console.log(files);
  return (
    <Modal title={title} visible={show} onOk={handleOk} onCancel={handleCancel}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tải lên" key="1">
          <div
            className="image-select"
            onDrop={(e) => {
              e.preventDefault();
              e.persist();
              setFiles([...files, e.dataTransfer.files[0]]);
            }}
            onDragOver={(e) => {
              e.preventDefault();
            }}
            onDragLeave={(e) => {
              e.preventDefault();
            }}
          >
            <input ref={ref} type={"file"} hidden accept="image/*" onChange={e =>handleFile(e)}/>
            <div>
              <div className="icon-drag">
                <img src="/assets/icon/picture.png" />
              </div>
              <h3>Kéo hình vào đây</h3>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button onClick={handleClickUpload} className="btn-upload">
              Chọn từ máy
            </button>
          </div>
        </TabPane>
        <TabPane tab="Chọn ảnh" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </Modal>
  );
}
