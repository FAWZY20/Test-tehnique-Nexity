import "./Boutique.css"
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import Header from "../../components/Header/Header"
import api from '../../api/api';

function TextExample() {
    const [products, setProduct] = useState([])

    const fetchProduct = async () => {
        const { data } = await api.get(`/users`)
        setProduct(data)
    }


    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div>
            <Header />
            <div className='container-fluid' >
                <div className='container' >
                    <h1 className="title-boutique">Liste de produit</h1>
                    <div className='row list-product'>
                        {
                            products.map((product) => (
                                <Card className='col-lg-3 block-produit'>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextExample;