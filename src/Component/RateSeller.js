import React from 'react';
import seller1 from '../images/seller1.jpg';
import { Rate } from 'antd';

import { Form, Input, InputNumber, Button } from 'antd';
import {Link} from "react-router-dom";

const { TextArea } = Input;

const layout = {
    wrapperCol: {
        span: 8,
    },
};

    const onFinish = (values) => {
        console.log(values);

    };

class RateSeller extends React.Component{
    render(){
        return(
            <div>
                <div align="center">
                    <h1><b>Rate Seller</b></h1>
                </div>
                <div align="center">
                    <img src={seller1} />
                    <h2><b>John Smith</b></h2>
                </div>
                <br></br>
                <div align="center">
                    <h2>Rate Seller</h2><Rate />
                </div>
                <br></br>
                <div align="center">
                    <h1><b>Write a Review</b></h1>
                    <Form {...layout} name="nest-messages" onFinish={onFinish}>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                <Link to="/RateDone/" >Submit
                                </Link>
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        );
    }
}

export default RateSeller;