import React from 'react';
import '../styles/CheckCout.css';
import {Form, Button, Input} from 'antd';
import DeliveryAddress from './DeliveryAddress';
import PaymentMethod from "./PaymentMethod";
import ConfirmPay from "./ConfirmPay";

const onFinish = (values) => {
    console.log(values);
};

class CheckOut extends React.Component{
    render(){
        const style = {

            backgroundColor: "lightgrey",
            padding: "10px",

        };
        return(
            <div className="main">
                <div className="left-side">
                    <p style={style}>
                        <h4><b>Contact and Schedule time with Seller!</b></h4>
                        <br></br>
                        Contact Information:
                        <br></br>
                        <br></br>
                        <b>John Smith</b>
                        <br></br>
                        Email: john.smith@gmail.com
                    </p>
                </div>
                <div className="middle-side">
                    <h2><b>Check Out</b></h2>
                    <div>
                    <p style={style}>
                        <Form onFinish={onFinish}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Pick Up
                                </Button>
                            </Form.Item>
                        </Form>
                        Seller address and Information:
                        <br></br>
                        Mr. Seller
                        <br></br>
                        <br></br>
                        Address:
                        <br></br>
                        1234 ABC Street
                        <br></br>
                        City Name, State Name
                        <br></br>
                        Post code
                    </p>
                    </div>
                    <div>
                        <DeliveryAddress />

                    </div>
                    <div>
                        <PaymentMethod />

                    </div>
                </div>
                <div className="right-side">
                    <ConfirmPay />
                </div>
            </div>
        );
    }
}

export default CheckOut;