import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div>
                <div>This is Home!</div>
                <div>
                    <Link to="/Login/" style={{color:'black'}}>
                        <div>点击跳转到Login</div>
                    </Link>
                    <Link to="/Registration/" style={{color:'black'}}>
                        <div>点击跳转到Registration</div>
                    </Link>
                    <Link to="/HomePage/" style={{color:'black'}}>
                        <div>点击跳转到HomePage</div>
                    </Link>
                    <Link to="/CheckOut/" style={{color:'black'}}>
                        <div>点击跳转到CheckOut</div>
                    </Link>
                    <Link to="/SellerInfo/" style={{color:'black'}}>
                        <div>点击跳转到SellerInfo</div>
                    </Link>
                    <Link to="/RateSeller/" style={{color:'black'}}>
                        <div>点击跳转到RateSeller</div>
                    </Link>
                    <Link to="/BuyerOrder/" style={{color:'black'}}>
                        <div>点击跳转到BuyerOrder</div>
                    </Link>
                    <Link to="/Product/" style={{color:'black'}}>
                        <div>点击跳转到Product</div>
                    </Link>
                    <Link to="/AllItemsPage/" style={{color:'black'}}>
                        <div>点击跳转到AllItemsPage</div>
                    </Link>
                    <Link to="/ItemPage/" style={{color:'black'}}>
                        <div>点击跳转到ItemPage</div>
                    </Link>
                    <Link to="/AllOrders/" style={{color:'black'}}>
                        <div>点击跳转到AllOrders</div>
                    </Link>
                    <Link to="/PostItem/" style={{color:'black'}}>
                        <div>点击跳转到PostItem</div>
                    </Link>
                    <Link to="/OrderDetailPage/" style={{color:'black'}}>
                        <div>点击跳转到OrderDetailPage</div>
                    </Link>
                    <Link to="/RatingPage/" style={{color:'black'}}>
                        <div>点击跳转到RatingPage</div>
                    </Link>
                    <Link to="/PostDonePage/" style={{color:'black'}}>
                        <div>点击跳转到PostDonePage</div>
                    </Link>
                    <Link to="/RateDone/" style={{color:'black'}}>
                        <div>点击跳转到RateDone</div></Link>
                </div>
            </div>
        );
    }
}

export default Home;