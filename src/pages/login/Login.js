import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from "antd";
import { getUserData } from "./api"
import SubTask from "./SubTask"



const Login = (props) => {

    const [repos, setRepos] = useState([])


    const handleSetData = (repos) => {
        const tempArr = repos.map((data, index) => {
            return {
                key: index,
                name: data.name,
                html_url: data.html_url,
                topics: data.topics.map(topic => topic + " "),
                description: data.description
            }
        })
        setRepos(tempArr)
    }

    const handleParseUrl = () => {
        const parsedUrl = new URL(window.location.href)
        const code = parsedUrl.searchParams.get("code")

        const payload = {
            code: code,
        }
        getUserData(code, payload)
            .then((response) => {
                handleSetData(response)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        handleParseUrl()
    }, [])

    const columns = [
        {
            title: 'Repo Adı',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Açıklama',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Tags',
            dataIndex: 'topics',
            key: 'topics',
        },
    ];


    return <Row>
        <Col sm={11}>
            <Table size='small' dataSource={repos} columns={columns} />
        </Col>
        <Col sm={2}>
        </Col>
        <Col sm={11}>

            <SubTask />
        </Col>

    </Row>

}



export default Login