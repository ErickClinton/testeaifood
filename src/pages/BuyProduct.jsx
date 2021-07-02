import React from 'react'
import {ProductsBuy} from '../components/ProductsBuy'

export default function BuyProduct(){
    return(
        <div className="wrap">
            <header>
                <img src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-0.png" alt="texto" className="logo"/>            
            </header>

            <ProductsBuy />
        </div>  
    );
}