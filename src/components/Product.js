import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Item from './Item';

const products = [
    {
        id : 1,
        slug : 'iphoneX',
        name : 'Iphone X',
        price : 28000000
    },
    {
        id : 2,
        slug : 'iphone8plus',
        name : 'Iphone 8 Plus',
        price : 20000000
    },
    {
        id : 3,
        slug : 'iphone7plus',
        name : 'Iphone 7 Plus',
        price : 15000000
    }
]

var Product = ({ match }) => {

    var url = match.url;

    var result = products.map((product, index) => {
        return (
            <NavLink to={`${url}/${product.name}`} key={ index }>
                <li className="list-group-item">{ product.id } - { product.name } - { product.price }</li>
            </NavLink>
        );
    });

    return (
        <div className="container">
            <h1>Danh Sách Sản Phẩm</h1>
            <div className="row">
                <ul className="list-group">
                    { result }
                </ul>
            </div>
            <div className="row">
                <Route path="/product/:name" component={ Item } />
            </div>
        </div>
    );
}

export default Product;