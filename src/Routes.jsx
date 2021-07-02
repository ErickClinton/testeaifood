import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Products from './pages/Products.jsx';
import Product from './pages/Product.jsx';
import BuyProduct from './pages/BuyProduct'
// import { ProductList } from './components/ProductsList';
// import { ProductItem  } from './components/ProductItem';

export default function Routes() {
    return (
        <BrowserRouter>
            {/* <Route path="/" exact component={ProductList} /> */}
            {/* <Route path="/products/" component={ProductList} /> */}
            {/* <Route path="/product/:id" component={ProductItem} /> */}
            <Route path="/" exact component={Products} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart/" component={BuyProduct} />

        </BrowserRouter>
    )
}