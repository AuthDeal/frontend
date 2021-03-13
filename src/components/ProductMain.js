import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';
import Show from './Show';

export default class ProductMain extends Component {
    render() {
        return (
            <div className="site-card-wrapper">
                <Row gutter={8}>
                    <Col span={6}>
                        <Show/>
                    </Col>
                    <Col span={6}>
                        <Show/>
                    </Col>
                    <Col span={6}>
                        <Show/>
                    </Col>
                    <Col span={6}>
                        <Show/>
                    </Col>
                </Row>
            </div>
        )
    }
}
