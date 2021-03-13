import React from 'react';
import { Form, Input, InputNumber, Button,  Select, } from 'antd';

const { Option } = Select;

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


class PaymentMethod extends React.Component{
    render(){
        const style = {

            backgroundColor: "lightgrey",
            padding: "10px",

        };
        return(
            <div>
                <h2><b>Payment Method</b></h2>
                <p style={style}>
                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select
                                placeholder="Select Card"
                            >
                                <Option>Visa</Option>
                                <Option>Master</Option>
                                <Option>other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item style={{ display: 'inline-block', width: 'calc(80% - 8px)' }}>
                            <Input placeholder="Card Number" />
                        </Form.Item>
                        <Form.Item
                            style={{ display: 'inline-block', width: 'calc(20% - 6px)' }}
                        >
                            <InputNumber placeholder="Expire MM/YY" />
                        </Form.Item>
                        <Form.Item style={{ display: 'inline-block', width: 'calc(80% - 8px)' }}>
                            <Input placeholder="CardHolder Name" />
                        </Form.Item>
                        <Form.Item style={{ display: 'inline-block', width: 'calc(20% - 8px)' }}>
                            <Input placeholder="CVC code" />
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

export default PaymentMethod;