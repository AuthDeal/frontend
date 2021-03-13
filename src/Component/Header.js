import React from "react";
import {Avatar, List} from "antd";
import item3 from "../images/item-3.jpg";
import { Menu } from 'antd';
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    ShopOutlined,
    UserOutlined,
    HomeOutlined, ShoppingOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";

const { SubMenu } = Menu;


class Header extends React.Component{
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render(){
        const { current } = this.state;
        return(
            <div>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="mail" icon={<HomeOutlined />}>
                        <Link to="/HomePage/" style={{color:'black'}}>
                           Home
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="mail" icon={<ShoppingOutlined />}>
                        <Link to="/PostItem/" style={{color:'black'}}>
                            Sell
                        </Link>
                    </Menu.Item>

                    <SubMenu key="SubMenu" icon={<UserOutlined />} title="My Profile">

                            <Menu.Item key="setting:1"><Link to="/BuyerOrder/" style={{color:'black'}}>
                                Your Orders
                            </Link></Menu.Item>
                        <Menu.Item key="setting:1"><Link to="/SellerInfo/" style={{color:'black'}}>
                            Seller Profile
                        </Link></Menu.Item>
                        <Menu.Item key="setting:1"><Link to="/SellerInfo/" style={{color:'black'}}>
                            Messages
                        </Link></Menu.Item>


                    </SubMenu>
                    {/*<Menu.Item key="alipay">*/}
                    {/*    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">*/}
                    {/*        Navigation Four - Link*/}
                    {/*    </a>*/}
                    {/*</Menu.Item>*/}
                </Menu>

            </div>
        );
    }
}

export default Header;