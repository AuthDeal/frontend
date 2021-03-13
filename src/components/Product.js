import React, { Component } from 'react'
import Price from './Price';
import ProductMain from './ProductMain';
import "../styles/Product.css";

export default class Product extends Component {
    render() {
        return (
            <div>
                <h1 className="product">All Deals near Sunnyvale</h1>
                <div className = "sort">
                    <Price />
                </div>
                <div className="picture">
                    <ProductMain/>
                    <ProductMain/>
                </div>
            </div>
        )
    }
}
