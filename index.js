const express=require('express');



const app=express();

const port=8000;
const db=require('./config/mongoose');
const bodyParser=require('body-parser');


//middleWare for converting form data into text
app.use(express.urlencoded());
app.use(bodyParser.json());

// use express router
app.use('/',require('./routes'));




app.listen(port,function(err){
    if(err){
        console.log(`Error in runnnig the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
})