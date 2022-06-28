var express = require('express');
var router = express.Router();
var controler = require('../controler/controler')


//GET
router.get('/users', controler.find);

//POST
router.post('/subscribe', controler.create);

//PUT
router.put('/users/uptdate/:id', controler.uptdate);

//DELETE
router.delete('/users/delete/:id', controler.delete);


module.exports = router;
