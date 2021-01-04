const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controllers');


// router.get('/', function(req, res, next) {
//     res.json({ name : 'sonjoy' , age : '20' , work : 'developer'});
// });

router.post('/', shopController.create);
router.get('/', shopController.getAll);
router.get('/:id', shopController.getById);
router.put('/:id', shopController.updateById);
router.delete('/:id', shopController.deleteById);

module.exports = router;
