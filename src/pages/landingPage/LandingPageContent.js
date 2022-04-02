import React, { useEffect, useState } from 'react';
import { AiFillGithub } from "react-icons/ai";
import LandingPageLayout from "../login/LoginRegisterLayout"

const { id, redirect } = require("../../config.json");


const LandingPageContent = (props) => {
  const [isFirstPage, setIsFirstPage] = useState(true)

  useEffect(() => {
    const parsedUrl = new URL(window.location.href)
    const code = parsedUrl.searchParams.get("code")
    if (code !== null) {
      setIsFirstPage(false)
    }
  }, [])

  return (<div>
    {isFirstPage ?
      <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${id}&redirect_uri=${redirect}`}><AiFillGithub size={100} color="black" /></a>
      :
      <LandingPageLayout />
    }
  </div>
  )
}


export default LandingPageContent
