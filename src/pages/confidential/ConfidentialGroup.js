import { Col, Row, Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ConfidentialItem from "../../component/confidential/ConfidentialItem";
import { fetchConfidentialsRequest } from "../../redux/actions/confidentialAction";

export default function ConfidentialGroup(props) {
  const { data } = useSelector((state) => state.confidentialReducer);
  const dispatch = useDispatch()
  useEffect(async () => {
    const action = fetchConfidentialsRequest()
    await dispatch(action)
  }, [])
  return (
    <Row
      className="confidential-row"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
    >
      {data && data.confidential ? (
        data.confidential.map((item, index) => {
          return (
            <Col className="gutter-row confidential-item" key={index} span={6}>
            <ConfidentialItem data={item} />
          </Col>
          )
        })
      ) : (
        <div className="spin"> 
          <Spin size="large"/>
        </div>
      )}
    </Row>
  );
}
