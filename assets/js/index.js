

$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})


$("#update_user").submit(function(event){
    event.preventDefault();

    const unindexed_array = $(this).serializeArray();
    const data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
    const request = {
        "url" : `http://localhost:8080/api/E-learning/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})


if (window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function () {
        const id = $(this).attr("data-id");
        const request = {
            "url": `http://localhost:8080/api/E-learning/${id}`,
            "method": "DELETE"
        }

        if (confirm("Do you really want to delete this record?")) {
            $.ajax(request)
                .done(function (response) {
                    alert("Data Deleted Successfully!");
                    location.reload();
                })

                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.error("Error deleting data: " + errorThrown);
                });
        }
    });
}

