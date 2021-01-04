const express = require('express');
const router = express.Router();
const Middleware = require('../middlewares/firstMiddlewares');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send('hello world');
  res.json({ name : 'sonjoy' , age : '20' , work : 'developer'});
});

router.get('/check' , Middleware.first , Middleware.second , Middleware.third)

module.exports = router;
