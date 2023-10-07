const express = require('express');
const app = express();
// app represents the server




// listen() method takes two arguments. The first argument is a number that represents the port on which the server will be listening. The second argument is a function that is going to be called when the server starts listening.
app.listen(8080, () => console.log("listening on 8080"))