import React from 'react';
import LoginContent from './LoginContent';
import InlineLayout from '../../components/layout/layout';





const LoginRegisterLayout = (props) => {

    return (
        <InlineLayout page='LoginContent' content={< LoginContent />} />
    )

}


export default LoginRegisterLayout
