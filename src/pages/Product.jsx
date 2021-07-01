import React from 'react';
import { ProductItem } from '../components/ProductItem';
import imagem from '../public/Vector.png'
import '../style/product.css'

export default function Product ({match}){
    return(
        <div className="wrap-product">
            <header className="header-product">
                <div className="button-back">
                    <a href="/">
                        <img src={imagem} alt={"vetor"} style={{ margin: '2rem 20rem 0rem 0rem' }}></img>
                    </a>
                </div>

                <img src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-0.png" alt="texto" className="logo"/>            
            </header>
            
            <ProductItem id={match.params.id}/>
        </div>
    )
}
