const path = require("path");

//page listeners
var router = function(app) {
    app.get("/", function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/form.html"));
    });

    app.get("/form", function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/form.html"));
    });

    app.get("/data", function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/data.html"));
    });
}

module.exports = router;