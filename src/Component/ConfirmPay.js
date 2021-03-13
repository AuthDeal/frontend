import React from 'react';
import 'antd/dist/antd.css';
import { Form, Button } from 'antd';


class ConfirmPay extends React.Component{
    render(){
        const style = {

            backgroundColor: "lightgrey",
            padding: "10px",

        };
        return(
            <div>
                <p style={style}>
                    <Form>
                    Subtotal(1 item):                    $200
                    <br></br>
                    Delivery charge：                    $10
                    <br></br>
                    Tax:                    $23
                    <br></br>
                    <hr></hr>
                    <h3>Total:                       $233</h3>
                        <br></br>
                        <br></br>
                        <Button type="primary" htmlType="submit">
                            <b>Confirm and Pay</b>
                        </Button>

                </Form>


                </p>

            </div>
        );
    }
}

export default ConfirmPay;