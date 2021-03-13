import React, { Component } from 'react'
import { Menu, Dropdown, Button, message, Space} from 'antd';
import { DownOutlined } from '@ant-design/icons';

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  
const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" >
        Price:from low to high
      </Menu.Item>
      <Menu.Item key="2" >
        Price:from high to low
      </Menu.Item>
      <Menu.Item key="3" >
        nearest to you
      </Menu.Item>
    </Menu>
);
export default class Price extends Component {
    render() {
        return (
            <div>
                <Space wrap>
                    <Dropdown overlay={menu}>
                    <Button>
                        Price:from low to high <DownOutlined />
                    </Button>
                    </Dropdown>
                </Space>,
            </div>
        )
    }
}
