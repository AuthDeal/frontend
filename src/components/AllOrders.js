import React, {Component} from 'react';
import {Button, Descriptions, PageHeader} from "antd";
import { Radio } from 'antd';
class AllOrders extends Component {
    render() {
        return (
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="All Orders"
                    extra={[
                        <Button key="1" type="primary">
                            View Detail
                        </Button>,
                        <Button key="2" type="primary">
                            Place Order
                        </Button>,
                    ]}
                >
                    <Radio>In -Progress</Radio>
                    <Radio>All</Radio>
                    <Descriptions size="small" column={3}>
                        <Descriptions.Item label="Picture">
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        </Descriptions.Item>
                        <Descriptions.Item label="Product's Name ">11111</Descriptions.Item>
                        <Descriptions.Item label="Order on">
                            <a>1111</a>
                        </Descriptions.Item>
                        <Descriptions.Item label="Status">1111</Descriptions.Item>
                        <Descriptions.Item label="Customer Information">1111</Descriptions.Item>
                        <Descriptions.Item label="Address">
                           11111
                        </Descriptions.Item>
                    </Descriptions>
                </PageHeader>
            </div>
        );
    }
}

export default AllOrders;