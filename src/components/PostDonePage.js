import React, {Component} from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";
import {Descriptions, PageHeader, Radio, Typography} from "antd";
import { Button } from "antd";

const { Title } = Typography;

class PostDonePage extends Component {
    render() {
        return (
            <div >
                <Title>Item Posted Successfully!</Title>
                <Button type="primary" href="https://ant.design">
                    Back to Main Page
                </Button>
            </div>
        );
    }
}

export default PostDonePage;
