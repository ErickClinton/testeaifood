import {useState, useEffect} from 'react'
import '../style/products.css'
import {Card} from 'react-bootstrap'
import {Link} from "react-router-dom";

export function ProductsList(){
    const [repositories, setRepositores]= useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/indahousi/test-aifoodi/main/products.json')
        .then(response=>response.json())
        .then(data =>setRepositores(data.products))
    },[])

    return(
        <div className="cards">
                {repositories.map(repository =>{
                    return (
                            <Card style={{ width: '30rem' }} className="cardmargin">
                            <Card.Img variant="top" src={repository.image} />
                            <Card.Body>
                                <Card.Title>{repository.id} - {repository.name}</Card.Title>
                                <Card.Text>
                                    {repository.description}
                                </Card.Text>

                                <Link to={`/product/${repository.id}`}>+ Detalhes</Link>
                            </Card.Body>
                            </Card>                    
                    )
                })}
        </div>
    );
}