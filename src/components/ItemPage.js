import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "../index.css";
import {
  Layout,
  Row,
  Col,
  Typography,
  Image,
  Rate,
  Space,
  Button,
  Card, List
} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import "../styles/ItemPage.css";
import {Link} from "react-router-dom";
import Header from "../Component/Header";
import {getAllItems} from "../utils/utils";

const {Footer, Content } = Layout;
const { Title } = Typography;

const getItemDetails = async () => {
  const url = 'http://localhost:8080/item/3';
  const response = await fetch(url);
  const json = await response.json();
  console.log(json)
  return json;
}

function ImageDemo() {
  return (
    <Image
      width={400}
      src="https://images-na.ssl-images-amazon.com/images/I/81OWCPMmCJL._AC_SL1500_.jpg"
    />
  );
}

class ItemPage extends React.Component{
  state = {
    listData: [], // 一级分类列表
  }

  async componentDidMount() {
    // 获取一级分类列表显示
    let listData = await getItemDetails();
    this.setState({listData});
  }
  render(){
    return(
        <div>
          <div>
            <Header />
          </div>
          <Layout>
            {/*<Header>Header</Header>*/}
            <Content>
              <Row>
                <Col flex={2}>
                  <ImageDemo />
                </Col>
                <Col flex={3}>
                  <Title level={2}>
                    Item Name: {this.state.listData.itemName}
                  </Title>
                  <Rate disabled defaultValue={4} />
                  <br />
                  Item Price: ${this.state.listData.price}
                  <Link to="/CheckOut/" style={{color:'black'}}>
                    <div><Button type="primary">Buy It Now</Button></div>
                  </Link>
                  <br />
                  Item Condition: {this.state.listData.itemCondition}
                  <br />
                  <Card>
                    <p>Item Description</p>
                    <p><b>{this.state.listData.description}</b>
                      <br></br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                      euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                      accumsan et viverra justo commodo. Proin sodales pulvinar sic
                      tempor. Sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Nam fermentum, nulla luctus
                      pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin
                      sapien nunc accuan eget.
                    </p>
                  </Card>
                </Col>
              </Row>
            </Content>

            <Footer>Footer</Footer>
          </Layout>

        </div>

    );
  }
}

export default ItemPage;

