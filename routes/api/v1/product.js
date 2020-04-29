const express=require('express');

const router=express.Router();
const productApi=require("../../../controllers/api/v1/product_api");

router.get('/',productApi.index);

router.post('/create',productApi.create);

router.get('/:id',productApi.destroy);

router.post('/:id/update_quantity',productApi.update);

module.exports=router;
