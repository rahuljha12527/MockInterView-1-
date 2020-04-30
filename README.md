<h1>Ecommerce api</h1>



<h2>Tech Stack</h2>
<h3>Node js</h3>
<h3>Mongo db</h3>

<h1>CRUD Operation</h1>


<h4>for checking the data int the database</h4>
<h4>http://localhost:8000/api/v1/product</h4>

{  <br>
    "Products": [<br>
        {<br>
            "_id": "5ea9cd812113416e440f5d7a",<br>
            "name": "rahul jha",<br>
            "quantity": 1,<br>
            "__v": 0<br>
        },<br>
        {<br>
            "_id": "5ea9cf11b43d4e6fd8ea21e1",<br>
            "name": "rahul jha",<br>
            "quantity": 9,<br>
            "__v": 0<br>
        },<br>
        {<br>
            "_id": "5eaa6d0af8088a6ee81dbc9e",<br>
            "name": "rahul jha",<br>
            "quantity": null,<br>
            "__v": 0<br>
        }<br>
    ]<br>
}<br>



<h4>for creating the data in database</h4>
<h4>http://localhost:8000/api/v1/product/create</h4>


<h4>for deleting the data in database</h4>
<h4>http://localhost:8000/api/v1/product/:id</h4>

<h4>for updating the data in database</h4>
<h4>http://localhost:8000/api/v1/product/:id/update_quantity?number=9</h4>


For run the project download it clone and write command in terminal node index.js 
