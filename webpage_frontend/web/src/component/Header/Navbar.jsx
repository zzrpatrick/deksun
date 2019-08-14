import React from 'react';
import { Menu, Icon, Row } from 'antd';
import { Link,NavLink } from 'react-router-dom'
const { SubMenu } = Menu;

export default class Navbar extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div style={{ marginTop: '30px' }}>
                <Row >
                    <Menu
                        onClick={this.handleClick}
                        defaultSelectedKeys={['1']}
                        mode="horizontal"
                        theme="light"
                    >
                        <SubMenu
                            key="home"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>Home Page</span>
                                </span>
                            }
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="Products"
                            title={
                                <span>
                                    <Icon type="appstore" />
                                    <span>Products</span>
                                </span>
                            }
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                                <span>
                                    <Icon type="setting" />
                                    <span>Navigation Three</span>
                                </span>
                            }
                        >
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Row>
            </div>
        );
    }
}   