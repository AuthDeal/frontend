import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";
import {Comment, Tooltip, List, Rate, Typography, Layout, Row, Col, Button, Card} from "antd";
import moment from "moment";

const { Title } = Typography;
const listData = [];

for (let i = 0; i < 23; i++) {
  listData.push({
    author: `Customer ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    content: (
      <p>
        <p>
          <Rate disabled defaultValue={3} />
        </p>
        <p>Item came as described. Nice!</p>
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>{moment().subtract(1, "days").fromNow()}</span>
      </Tooltip>
    )
  });
}

class RatingPage extends React.Component{
    render(){
        return(
            <div>
                <Title>Your Ratings</Title>
                <List
                    className="comment-list"
                    itemLayout="horizontal"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 5
                    }}
                    dataSource={listData}
                    footer={
                        <div>
                            <b>ant design</b> footer part
                        </div>
                    }
                    renderItem={(item) => (
                        <li>
                            <Comment
                                author={item.author}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                            />
                        </li>
                    )}
                />

            </div>

        );
    }
}

export default RatingPage;

