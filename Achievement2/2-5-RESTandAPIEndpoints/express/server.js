const express = require('express');
const app = express();
// app represents the server

// set up endpoint
app.get('/', )
// get() represents HTTP method. get() method takes two arguments. The first argument is a string representing the endpoint. The second argument is a funciton that represents what is going to happen with the request and response objects. 


app.listen(8080, () => console.log("listening on 8080"))
// listen() method takes two arguments. The first argument is a number that represents the port on which the server will be listening. The second argument is a function that is going to be called when the server starts listening.
