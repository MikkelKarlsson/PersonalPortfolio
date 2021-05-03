// Importing Express
const express = require('express');

// Instantiate Express
const app = express();

//Define port
const port = 8080;

//Listenen to the port
app.listen(port, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("Server is running on port", port);
});