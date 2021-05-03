// Importing Express
const express = require('express');

// Instantiate Express
const app = express();

    //Path
const path = require('path');

    //Define port
const port = 5000;

//app.use(express.static("www"));

    // All API's served to the html pages
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});


    //Listenen to the port
    app.listen(port, (error) => {
        if(error) {
            console.log(error);
        }
        console.log("Server is running on port", port);
    });
    