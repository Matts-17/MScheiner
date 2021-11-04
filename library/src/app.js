const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");//look this up
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/client", express.static(path.resolve(__dirname + "/../client/")));

//Make the server
var server;
var port = 5000;

//Page listeners (our router)
var router = require("./router");
router(app);
//Service listeners (our data processors)
var services = require("./services.js");
services(app);

//Listen
server = app.listen(port, function(err) {
    if(err) {
        throw err;
    }

    console.log("Listening on port " + port);
});
//html for entering data and one for displaying it in a table that matches data im uploading, into client dir