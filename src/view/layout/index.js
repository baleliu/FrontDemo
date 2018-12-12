import React from 'react';
import {Link} from 'react-router-dom';
import style from './style.css'

import {Layout, Menu, Icon} from 'antd';

const {
    Header, Content, Footer, Sider,
} = Layout;

function foo() {
    import ('/Users/liuwentao/development/workspace/hand-space/hcpgl/hcpgl-front/node_modules/antd/es/card/index.js')
        .then((module) => {
            const m= module.default;
            console.log('m:'+m);
            return m;
        });
}

export default class MyLayout extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Sider style={{
                        overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
                    }}
                    >
                        <div className="logo"/>
                        <Menu theme="dark" mode="inline">
                            <Menu.Item key="1">
                                <Link to="/">
                                    <Icon type="user"/>
                                    <span className="nav-text">
                                        HomePage
                                    </span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/page1">
                                    <Icon type="video-camera"/>
                                    <span className="nav-text">
                                        Page1
                                    </span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/page2">
                                    <Icon type="upload"/>
                                    <span className="nav-text">
                                        Page2
                                    </span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{marginLeft: 200}}>
                        <Header style={{background: '#fff', padding: 0}}/>
                        <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                            <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
                                {this.props.children}
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            Ant Design ©2018 Created by Ant UED
                            {foo()}
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}