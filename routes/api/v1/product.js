const express=require('express');

const router=express.Router();
const productApi=require("../../../controllers/api/v1/product_api");

router.get('/',productApi.index);

module.exports=router;
