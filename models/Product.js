const mongoose=require('mongoose');

const ProductScehma=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
})

const Products=mongoose.model('Products',ProductScehma);
module.exports=Products;