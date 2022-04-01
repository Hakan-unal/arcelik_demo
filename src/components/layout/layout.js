import React from 'react';
import { Spin, Layout, } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";


const InlineLayout = (props) => {
    const { Content } = Layout

    return (
        <div>
            <Spin indicator={<LoadingOutlined spin />} spinning={false}>

                <Layout className="site-layout-background"   >
                    <Content>
                        {props.content}
                    </Content>
                </Layout>

            </Spin >
        </div >
    );
}

const mapState = (globalState) => {
    return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(InlineLayout));