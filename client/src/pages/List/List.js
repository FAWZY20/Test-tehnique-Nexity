import Header from "../../components/Header/Header"
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import api from '../../api/api';
import "./List.css"


function List() {
    const [products, setProduct] = useState([])
    const [del, setDel] = useState({
        posts:[]
    })

    const fetchProduct = async () => {
        const { data } = await api.get(`/users`)
        setProduct(data)
    }

    const deleteProduct = (id, e) => {
        api.delete(`/users/delete/${id}`)
        const posts = del.posts.filter(item => item.id !== id)
        setDel({posts})
        //location.reload()
    }



    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div>
            <Header />
            <div className="conainer-fluid" >
                <div className="container list" >
                    <h1 className="title-list">Liste des produit ajouter</h1>
                    <div className="row col-lg-10" >
                        <Table className="list-table"  striped bordered hover>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Titre</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    products.map((product, index) => (
                                        <tr>
                                            <td>{index}</td>
                                            <td>{product.title}</td>
                                            <td>{product.description}</td>
                                            <td className="action-list" >
                                                <Button className="action-list-btn" onClick={(e) => deleteProduct(product._id, e)} variant="danger">Supprimer</Button>
                                                <Button className="action-list-btn" variant="primary">Modifier</Button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </Table>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default List;