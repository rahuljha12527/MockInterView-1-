const express=require('express');

const router=express.Router();
const productController=require('../controllers/ProductController');

router.get('/',productController.create);

router.use('/api',require('./api'));

  
console.log('router loaded');

module.exports=router;