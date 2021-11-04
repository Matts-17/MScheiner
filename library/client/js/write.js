$("#data-submit").click(function(){
    var formData = {
        title: $("#title").val(),
        author: $("#author").val(),
        publisher: $("#publisher").val(),
        year: $("#year").val(),
        isbn: $("#isbn").val()
    }
    $.ajax({
        url:"http://localhost:5000/form.html",
        type: "post",
        data: formData,
        success: function(response) {
            var returnData = JSON.parse(response);

            if(returnData.msg === "SUCCESS") {
                alert("SUCCESS");
            }else {
                console.log(response);
            }
        },
        error: function(response) {
            console.log(response);
        }
    })
}) 