import React from 'react'
import '../style/buyproducts.css'
import Circle from '../public/circle.png'
import Xis from '../public/x.png'
import car from '../public/car.png'
import {Link} from "react-router-dom";

export  function ProductsBuy(){
    const vazio =1;
    if(vazio==1){
        return(
            <div id="flex-container">
                <div id="content">
                    <h1>Seu carrinho</h1>
                    <ul>
                        <li className="title">
                            <div className="product-name">
                                Descrição
                            </div>
                            
                            <div className="quantity">
                                Quantidade
                            </div>
                            
                            <div className="price">
                                Preço
                            </div>
                        </li>                    
                        <li>
                            <div className="product-name">
                                Hamburguer description <span>Hamburguer pao picles</span> 
                            </div>
                            
                            <div className="quantity">
                                <span className="amount">1</span> 
                            </div>
                            
                            <div className="price">
                                <span>R$ 24,90</span>
                            </div>
                        </li>
                        <li>
                            <div className="product-name">
                            Pizza description <span>Hamburguer pao picles</span> 
                            </div>
                            
                            <div className="quantity">
                                <span className="amount">1 </span> 
                            </div>
                            
                            <div className="price">
                                <span>R$ 24,90 </span>
                            </div>
                        </li>
                    </ul>

                    <div className="summary">
                        <p>Total: R$ 23.33</p>
                        <button className="buy-now">Finalizar Pedido</button>
                    </div>
                    
                </div>
            </div>
        );
    }
    else{
        return(
            <>
                <strong>Não foi encontrado nada em seu carrinho</strong>

                <p>volte e selecione um de nossos produtos para continuar</p>

                

                <Link to={``}className="Back">Voltar</Link>



            </>
        )
    }
   
    
}