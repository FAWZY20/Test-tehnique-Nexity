import Header from "../../components/Header/Header"
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./Ajouter.css"
import React from 'react';
import axios from "axios";


function Ajouter() {
    const [formValue, setFormValue] = React.useState({
        title: '',
        description: ''
    });

    const handleSubmit = event => {
        event.preventDefault();
        const product =  {
            title: formValue.title,
            description: formValue.description
        }

        axios.post('http://localhost:9000/api/subscribe', {product})
            .then(res =>{
                console.log(res);
                console.log(res.data);
                window.location = "/"
            })
    }

    const handleChangTitlee = event =>{
        setFormValue({title: event.target.value});
    }

    const handleChangeDescription = event =>{
        setFormValue({description: event.target.value});
    }

    return (
        <div>
            <Header />
            <div className="container-fluid" >
                <div className="container ">
                    <h1 className="form-title">Enregistrer un produit</h1>
                    <div className="row form-subscrube">
                        <Form className="col-lg-6" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                <Form.Label>Titre du produit </Form.Label>
                                <Form.Control type="text" name="title" onChange={handleChangTitlee} />
                                <Form.Label>Description courte du produit </Form.Label>
                                <Form.Control type="text" name="description" onChange={handleChangeDescription} />
                                
                            </Form.Group>
                            <div className="submit-product-btn-block">
                                <Button className="submit-product-btn" variant="primary" type="submit">
                                    Enregistrer
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Ajouter;