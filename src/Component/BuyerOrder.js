import React from 'react';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import item3 from '../images/item-3.jpg';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `Order# ${i}`,
        avatar: 'https://magecomp.com/blog/wp-content/uploads/2018/08/How-to-get-Total-Order-Item-Quantity-in-Magento-2.png',
        description:
            'Casio label writer disc title printer CW-E60 16039 fromJAPAN.',
        status:
            'Status: In Progress',
        seller:
            'John Smith',
    });
}



class BuyerOrder extends React.Component{
    seller = 'John Smith';
    render(){
        return(
            <div>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={listData}
                    footer={
                        <div>
                            <b>AuthDeal</b> footer part
                        </div>
                    }
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            extra={
                                <img
                                    width={100}
                                    alt="logo"
                                    src={item3}
                                />
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={item.title}
                                description={<a href={item.href}>{item.description}</a>}
                            />
                            {item.status}
                            <br></br>
                            Seller: {this.seller}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default BuyerOrder;