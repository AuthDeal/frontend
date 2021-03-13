import React from 'react';
import {List, Card, Avatar} from 'antd';
import item3 from '../images/item-3.jpg';
import {Link} from "react-router-dom";
import {getAllItems} from "../utils/utils";

class ItemSale extends React.Component{
    state = {
        listData: [], // 一级分类列表
    }

    async componentDidMount() {
        // 获取一级分类列表显示
        let listData = await getAllItems();
        this.setState({listData});
    }

    render(){
        return(
            <div>
                <div><h1>Items for Sale</h1></div>
                <div>
                    <Link to="/AllItemsPage/" >See All Items
                    </Link>
                </div>
                <div>
                    {this.state.listData.map(item =>
                        <div>
                            {/*<li key={item.itemId}>{item.itemName}</li>*/}
                            {/*<li>{item.picture}</li>*/}
                            {/*<li>{item.description}</li>*/}
                            <List
                                grid={{ gutter: 16, column: 4 }}
                                dataSource={this.state.listData}
                                renderItem={item => (
                                    <List.Item>
                                        <Card title={item.itemName}><a href="http://www.google.com"><img src={item3} /></a></Card>
                                    </List.Item>
                                )}
                            />

                        </div>

                    )}

               </div>

            </div>

        );
    }
}

export default ItemSale;


/*return menuList.map(item => {
    if (!item.children) {
        return (
            <Menu.Item key={item.key}>
                <Link to={item.key}>
                    <Icon type={item.icon}/>
                    <span>{item.title}</span>
                </Link>
            </Menu.Item>
        )
    }*/

/*{list.filter(isSearched(pattern)).map(item =>
    <div key={item.objectID} className="table-row">
        <span style={largeColumn}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={midColumn}>
          {item.author}
        </span>
        <span style={smallColumn}>
          {item.num_comments}
        </span>
        <span style={smallColumn}>
          {item.points}
        </span>
        <span style={smallColumn}>
          <Button
              onClick={() => onDismiss(item.objectID)}
              className="button-inline"
          >
            Dismiss
          </Button>
        </span>
    </div>
)}*/