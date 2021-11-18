const fs = require('fs');
//const { networkInterfaces } = require('os');

const FILENAME = "./src/text/libText";

var services = function(app) {
    app.post("/addData", function(req, res) {
        console.log("in addData");
        var id = "lib" + Date.now();
        var libData = {
            id: id, //the 'id' identifier contains the id variable defined above
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

                    libDataArr.push(libData); //copy lines 21-38 for the delete but make 29 a loop that splices deleted data
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
            console.log("adding first record");
            libDataArr.push(libData);
            fs.writeFile(FILENAME, JSON.stringify(libDataArr), function(err) {
            if(err) {
                res.send(JSON.stringify({msg: err}));
            } else {
                res.send(JSON.stringify({msg: "SUCCESS"}));
            }
        })}
        
    });

//hw is to make js that populates the html table
//get ready for test 2 

    app.get("/get-records", function(req, res){
        fs.readFile(FILENAME, "utf-8", function(err, data) {
            if(err) {
                res.send(JSON.stringify({msg: err}));
            } else {
                libDataArr = JSON.parse(data);
                res.send(JSON.stringify({msg: "SUCCESS", data: libDataArr}));
            }
        });
    });
}
module.exports = services;
