import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";
import {List, Typography, Button, message} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import {Link} from "react-router-dom";
import Main from "./Main";
import {getAllItems} from "../utils/utils";
import {Avatar, Space} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const { Title } = Typography;
const testImage = "https://images-na.ssl-images-amazon.com/images/I/81OWCPMmCJL._AC_SL1500_.jpg";

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

// for (let i = 0; i < 15; i++) {
//   listData.push({
//     href: "https://ant.design",
//     title: "Casio label writer disc title printer CW-E60 16039 fromJAPAN",
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/81OWCPMmCJL._AC_SL1500_.jpg"
//   });
// }

class AllItemsPage extends React.Component{
    state = {
        listData: [], // 一级分类列表
    }

    async componentDidMount() {
        // 获取一级分类列表显示
        let listData = await getAllItems();
        this.setState({listData});
    }

    render(){
        // let listData = this.listData || {} // 如果还没有指定一个空对象

        return(
            <div>
                <Title>All Items</Title>
                <ul>

                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 4
                        }}
                        dataSource={this.state.listData}
                        footer={
                            <div>
                                <b>ant design</b> footer part
                            </div>
                        }
                        renderItem={(item) => (
                            <List.Item
                                key={item.itemId}
                                extra={<img width={150} alt="item" src="https://images-na.ssl-images-amazon.com/images/I/81OWCPMmCJL._AC_SL1500_.jpg" />}
                                actions={[
                                    <Button
                                        type="primary"
                                        icon={<DeleteOutlined />}
                                        style={{ background: "orange", borderColor: "orange" }}
                                    >
                                        Delete Item
                                    </Button>
                                ]}
                            >
                                <List.Item.Meta title={<a href={item.href}>{item.itemName}</a>} />
                                {item.picture}
                                <br></br>
                                Item Condition:{item.itemCondition}
                                <br></br>
                                Item Price: {item.price}
                            </List.Item>
                        )}
                    />

                    {/*{this.state.listData.map(item =>*/}
                    {/*    <div>*/}
                    {/*        /!*<li key={item.itemId}>{item.itemName}</li>*!/*/}
                    {/*        /!*<li>{item.picture}</li>*!/*/}
                    {/*        /!*<li>{item.description}</li>*!/*/}


                    {/*    </div>*/}

                    {/*)}*/}
                </ul>

            </div>

        );
    }
}

export default AllItemsPage;


