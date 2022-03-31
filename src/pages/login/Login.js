import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Spin, message } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { getUserData } from "./api"




const Login = (props) => {

    const [loading, setLoading] = useState(false)


    const handleParseUrl = () => {
        const parsedUrl = new URL(window.location.href)
        const code = parsedUrl.searchParams.get("code")

        const payload = {
            code: code,
        }
        getUserData(code, payload)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        handleParseUrl()
    }, [])


    return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} spinning={loading} size="large" >


        <div>
            Test
        </div>

    </Spin >;
}



export default Login