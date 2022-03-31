import React from "react";

import { Link } from "react-router-dom";
import { Result } from 'antd';

const Login = (props) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sayfa Bulunamadı"
      extra={<Link to="/" type="primary">Anasayfa'ya dönmek için tıklayın</Link>}
    />
  )
}



export default Login
