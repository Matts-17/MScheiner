$("#data-submit").click(function(){
    var formData = {
        title: $("#title").val(),
        author: $("#author").val(),
        publisher: $("#publisher").val(),
        year: $("#year").val(),
        isbn: $("#isbn").val()
    }
    $.ajax({
        url:"http://localhost:5000/addData",
        type: "post",
        data: formData,
        success: function(response) {
            var returnData = JSON.parse(response);

            if(returnData.msg === "SUCCESS") {
                alert("SUCCESS");
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