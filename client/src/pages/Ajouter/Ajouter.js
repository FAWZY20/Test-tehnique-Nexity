import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./Ajouter.css"
import axios from "axios";


function Ajouter() {
    const [formValue, setFormValue] = useState({
        title: "",
        description: ""
    });

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/api/subscribe", {
            title: formValue.title,
            description: formValue.description
        })
            .then(res => {
                console.log(res.data);
                window.location = "/"
            })
    }


    const handle = (e) => {
        const newdata = { ...formValue }
        newdata[e.target.id] = e.target.value
        setFormValue(newdata)
        console.log(newdata);
    }

    return (
        <div>
            <Header />
            <div className="container-fluid" >
                <div className="container ">
                    <h1 className="form-title">Enregistrer un produit</h1>
                    <div className="row form-subscribe">
                        <form className="form-subscribe-input col-lg-6" onSubmit={(e) => submit(e)} >
                            <div>
                                <input onChange={(e) => handle(e)} id="title" value={formValue.title} placeholder='Titre' type="text"></input>
                            </div>
                            <div>
                                <input onChange={(e) => handle(e)} id="description" value={formValue.description} placeholder='Description' type="text"></input>
                            </div>
                            <div className="submit-product-btn-block">
                                <Button className="submit-product-btn" variant="primary" type="submit">
                                    Enregistrer
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Ajouter;