import React from 'react';
import { ProductsList } from '../components/ProductsList';

export default function Products (){
    return(
        <div className="wrap">
            <header>
                <img src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-0.png" alt="texto" className="logo"/>            
            </header>

            <ProductsList />

        </div>
    )
}
