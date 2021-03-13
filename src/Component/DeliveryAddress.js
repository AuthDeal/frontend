import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const onFinish = (values) => {
    console.log(values);
};


class DeliveryAddress extends React.Component{
    render(){
        const style = {

            backgroundColor: "lightgrey",
            padding: "10px",

        };
        return(
            <div>
                <h2><b>Delivery Address</b></h2>
                <p style={style}>
                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                            <Input placeholder="First Name" />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                            <Input placeholder="Last Name" />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    type: 'street',
                                },
                            ]}
                        >
                            <Input style={{ width: '100%' }} placeholder="Street Address" />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    type: 'number',
                                    min: 0,
                                    max: 9999,
                                },
                            ]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                            <InputNumber placeholder="Apt/Room/Unit" />
                        </Form.Item>
                        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                            <Input placeholder="City" />
                        </Form.Item>
                        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                            <Input placeholder="State" />
                        </Form.Item>
                        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                        <Input placeholder="Post Code" />
                    </Form.Item>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                </p>
            </div>
        );
    }
}

export default DeliveryAddress;