const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/Ecommerce');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"error"));

db.once('open',function() {
    console.log('Successfully Connected to db');
});


module.exports=db;