import {useState, useEffect} from 'react'
import '../style/products.css'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export function ProductItem(props){
    const [repositories, setRepositores]= useState([]);

    function filterById (products) {
        setRepositores(products.filter( product => (product.id == props.id)));
    }

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/indahousi/test-aifoodi/main/products.json')
        .then(response=>response.json())
        .then(data => filterById(data.products))
    },[props.id])
    
    return (
        <div className="cards">
            {repositories.map(repository =>{
                return (
                    <Card className="cardmargin">
                    <Card.Img variant="top" src={repository.image} />
                    <Card.Body>
                        <Card.Title>{repository.id} - {repository.name}</Card.Title>
                        <Card.Text>
                            {repository.description}
                        </Card.Text>
                        <Card.Text>
                            R$ {repository.price}
                        </Card.Text>                        
                        {/* <Button variant="primary">Adicionar ao carrinho</Button> */}
                        <Link to={`/cart/`}>+ Adicionar ao carrinho</Link>
                    </Card.Body>
                    </Card>    
                )
            })}
        </div>
    );
}