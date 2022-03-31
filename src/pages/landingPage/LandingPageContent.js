import React from 'react';
import { Divider, Card, Button } from "antd"
import { AiFillGithub } from "react-icons/ai";
const { id, redirect, secret } = require("../../config.json");


const LandingPageContent = (props) => {


  return (
    <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${id}&redirect_uri=${redirect}`}><AiFillGithub size={100} color="black" /></a>
    // <Button icon={<AiFillGithub size={100} color="black" />} />
  )
}


export default LandingPageContent
