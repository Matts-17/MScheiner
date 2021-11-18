function createTable() {
    $.ajax({
        url:"http://localhost:5000/get-records",
        type: "get",
        success: function(response) {
            var returnData = JSON.parse(response);

            if(returnData.msg === "SUCCESS") {
                buildTable(returnData.data);
            }else {
                console.log(response.msg);
            }
        },
        error: function(response) {
            console.log(response);
        }
    });
}

function buildTable(myPar) {
    var myString = "";
    for(var i = 0; i< myPar.length; i++) {
        myString += "<tr>";
        myString += "<td>" + myPar[i].title + "</td>";
        myString += "<td>" + myPar[i].author + "</td>";
        myString += "<td>" + myPar[i].publisher + "</td>";
        myString += "<td>" + myPar[i].year + "</td>";
        myString += "<td>" + myPar[i].isbn + "</td>";
        myString += "<td>"
        myString += "<button class='deleteBtn' data-id='"+myPar[i].id+"'>";
        myString += "delete </button>";
        myString += "</td>"
        myString += "</tr>";
    }
    $("#myTBody").html(myString);
    btnListenerFunct();
}

function btnListenerFunct() {
    $(".deleteBtn").click(function(){
        var id = this.getAtrribute("data-id");
        $.ajax({
            url:"http://localhost:5000/deleteData",
            type: "delete",
            data: {id: id},
            success: function(response) {
                var returnData = JSON.parse(response);
    
                if(returnData.msg === "SUCCESS") {
                    createTable();
                }else {
                    console.log(response.msg);
                }
            },
            error: function(response) {
                console.log(response);
            }
        });
        return false;
    }); 
}

createTable();