import React, {Component} from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from 'antd';
class OrderDetailPage extends Component {
    render() {
        return (
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="Order Detail"
                    subTitle="Order #12345678"
                    extra={[
                        <Button key="1" type="primary">
                            Place Order
                        </Button>,
                    ]}
                >
                    <Descriptions size="small" column={3}>
                        <Descriptions.Item label="Picture">
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        </Descriptions.Item>
                        <Descriptions.Item label="Product's Name ">Casio label writer disc title printer CW-E60 16039 fromJAPAN</Descriptions.Item>
                        <Descriptions.Item label="Order on">
                            <a>Feb/02/20201</a>
                        </Descriptions.Item>
                        <Descriptions.Item label="Status">In Progress</Descriptions.Item>
                        <Descriptions.Item label="Customer Information">Jack Ma</Descriptions.Item>
                        <Descriptions.Item label="Address">
                            Street address, City, State, Post code
                        </Descriptions.Item>
                    </Descriptions>
                </PageHeader>
            </div>
        );
    }
}

export default OrderDetailPage;