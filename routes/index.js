const express=require('express');

const router=express.Router();
const productController=require('../controllers/ProductController');

router.get('/create',productController.create);
  
console.log('router loaded');

module.exports=router;