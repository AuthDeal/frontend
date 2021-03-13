import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import CheckOut from './Component/CheckOut';
import Page2 from './Component/SellerInfo';
import Page3 from './Component/RateSeller';
import Page4 from './Component/BuyerOrder';
import RateDone from './components/RateDone';
import Login from './authenticate/login';
import Registration from "./authenticate/registration";
import HomePage from "./components/HomePage";
import Home from "./Component/Home";
import Product from "./components/Product";
import AllItemsPage from "./components/AllItemsPage";
import ItemPage from "./components/ItemPage";
import AllOrders from "./components/AllOrders";
import OrderDetailPage from "./components/OrderDetailPage";
import RatingPage from "./components/RatingPage";
import PostDonePage from "./components/PostDonePage";
import PostItem from "./Component/PostItem";


function App() {
  return (
      <Router >
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/CheckOut" component={CheckOut} />
          <Route path="/SellerInfo" component={Page2} />
          <Route path="/RateSeller" component={Page3} />
          <Route path="/BuyerOrder" component={Page4} />
          <Route path="/RateDone" component={RateDone} />
          <Route path="/Login" component={Login} />
          <Route path="/Registration" component={Registration} />
          <Route path="/HomePage" component={HomePage} />
          <Route path="/Product" component={Product} />
          <Route path="/AllItemsPage" component={AllItemsPage} />
          <Route path="/ItemPage" component={ItemPage} />
            <Route path="/AllOrders" component={AllOrders} />
          <Route path="/OrderDetailPage" component={OrderDetailPage} />
          <Route path="/RatingPage" component={RatingPage} />
          <Route path="/PostDonePage" component={PostDonePage} />
            <Route path="/PostItem" component={PostItem} />

        </div>
      </Router>
  );
}

export default App;
