import { Modal, Spin } from "antd";
import React, { useRef, useState } from "react";
import { Tabs, message } from "antd";
import { updateAvatar, updateCover } from "../../../apis/post";
import { useDispatch, useSelector } from "react-redux";
import { getUserRequest } from "../../../redux/actions/authAction";
const { TabPane } = Tabs;

export default function ModalImageUpdate(props) {
  const { show, setShow, title, type, setLoad } = props;
  const { user } = useSelector(state => state.authReducer)
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false)
  /// Hook
  const dispatch = useDispatch()
  const info = () => {
    message.success(type === 'cover'?'Cập nhật ảnh bìa thành công': 'Cập nhật ảnh đại diện thành công');
  };
  const handleUpdateCover = async (data) =>{
    try {
      const request = {
        form: data,
        mssv: user?.mssv
      }
      const res = type == 'cover'? await updateCover(request): await updateAvatar(request)
      if(res){
        setLoading(false)
        info()
        setShow(false)
        dispatch(getUserRequest(user?.mssv))
        setLoad(1)
      }
    } catch (error) {
      console.log('Failed to update cover', error)
    }
  }
  const handleFile = (e) => {
      setLoading(true)
      let formData = new FormData();
      formData.append("image", e.target.files[0]);
      handleUpdateCover(formData)
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
              
              {loading?<></>:<div className="icon-drag">
                <img src="/assets/icon/picture.png" />
              </div>}
              {loading?<></>:<h3>Kéo hình vào đây</h3>}
              {loading?<Spin />:<></>}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button onClick={handleClickUpload} className="btn-upload">
              Chọn từ máy
            </button>
          </div>
        </TabPane>
      </Tabs>
    </Modal>
  );
}
