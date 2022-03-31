import { Col, Row } from 'antd';
import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";
import Login from './Login';



const center = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "15%",
  marginTop: "50px"
}

const LoginContent = (props) => {




  return <div >
    <Row align="bottom" >

      <Col sm={{ span: 24, offset: 24 }} md={{ span: 24, offset: 24 }}  >
        <Login />
      </Col>

    </Row>
  </div>;
}



const mapState = (globalState) => {
  return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(LoginContent));