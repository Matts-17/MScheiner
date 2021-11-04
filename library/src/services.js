const fs = require('fs');

const FILENAME = "./src/text/libText";

var services = function(app) {
    app.post("/data.html", function(req, res) {
        var libData = {
            title: req.body.title, 
            author: req.body.author,
            publisher: req.body.publisher,
            year: req.body.year,
            isbn: req.body.isbn
        }
        console.log("Data:" + JSON.stringify(libData));
        var libDataArr = [];

        if(fs.existsSync(FILENAME)) {
            //Read in current database
            fs.readFile(FILENAME, "utf-8", function(err, data) {
                if(err) {
                    res.send(JSON.stringify({msg: err}));
                } else {
                    libDataArr = JSON.parse(data);

                    libDataArr.push(libData);
                    fs.writeFile(FILENAME, JSON.stringify(libDataArr), function(err) {
                        if(err) {
                            res.send(JSON.stringify({msg: err}));
                        } else {
                            res.send(JSON.stringify({msg: "SUCCESS"}));
                        }
                    });
                }
            });
        } else { 
            libDataArr.push(libData);
            fs.writeFile(FILENAME, JSON.stringify(libDataArr), function(err) {
            if(err) {
                res.send(JSON.stringify({msg: err}));
            } else {
                res.send(JSON.stringify({msg: "SUCCESS"}));
            }
        })}
        
    });
};
//hw is to make js that populates the html table
//get ready for test 2 

app.get("/get-records", function(req, res){

})

module.exports = services;