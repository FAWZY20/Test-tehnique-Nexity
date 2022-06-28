var Userdb = require('../models/models')


/*
Fonction qui permet de créé de nouveau produit
*/

exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "le contenu ne peut pas être vide" });
        return;
    }

    const user = new Userdb({
        title: req.body.title,
        description: req.body.description,
        // data: req.body.data
    })

    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => (
            res.status(500).send({
                message: err.message | "le contenu ne peut pas être vide"
            })
        ))
}


/*
Fonction qui permet de mettre à jour des produits en fonction de leu id
*/

exports.uptdate = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `utilisateur ne peut pas etre modifier` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).sens({ message: "Erreur de mise a jour" })
        })
}


/*
Fonction qui permet de supprimer des produits en fonction de leur id
*/

exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: " ne peut pas supprimer ce produit" })
            } else {
                res.send({
                    message: "Produit supprimer avec succé"
                })
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error" })
        })
}



/*
Fonction qui permet d'afficher des produits
*/

exports.find = (req, res) => {
    Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error" })
        })
}


