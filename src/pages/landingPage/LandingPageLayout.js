import React from 'react';
import LandingPageContent from './LandingPageContent';
import Layout from '../../components/layout/layout';




const LandingPageLayout = (props) => {

    return (
        <Layout page='LandingPageContent' content={<LandingPageContent />} />
    )

}

export default LandingPageLayout
