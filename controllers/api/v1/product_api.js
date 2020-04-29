const Product=require('../../../models/Product');


// list of all item from db
module.exports.index=async function(req,res){

    let Products=await Product.find({})
        .sort('-createdAt');

        return res.json(200,{
            Products:Products
        })
}

module.exports.create=async function(req,res){
    try{
        
        let product=await Product.create({
            name:req.body.name,
            quantity:req.body.quantity
        });

        return res.json(200,{
            data:{
                product:product
            }
        })
    }catch(err){
        console.log("Error while creating a product",err);
        return res.json(500,{
            message:"Internal Server error"
        })
    }
}

module.exports.destroy=async function(req,res){
    
    try{
        let products=await Product.findById(req.params.id);
        products.remove();

        return res.json(200,{
            message:"Product Deleted"
        });
    }catch(err){
        console.log("Error while delete the product",err);
        return res.json(500,{
            message:"Internal Server error"
        });
    }
         
}
// update the data bhai query use hota hai ? mark wale mein acha bbhai ek baar postman check krlu ek second
module.exports.update=function(req,res){
    try{
        Product.findOneAndUpdate({_id:req.params.id},
          {$set:
            {quantity:req.query.number}},function(err,product){
                if(err){
                    console.log("product not found");
                }
                return res.json(200,{
                    data:{
                        product:product,
                    },
                    message:"Updated SUccessfully"
                });
            }
        );
    }catch(err){
        console.log("Error",err);
        return res.json(500,{
            message:"Server error"
        });
        
}
}
