$("#earthquakes").click(function () {
    let address = "apiv0/earthquakes/recent";
    let params = { hour: 4, day: 56 };
    $.ajax({
        type: "POST",
        dataTyope: "json",
        url: address,
        data: params,
        success: displayEarthquakes,
        error: errorOnAjax
    });
});


function errorOnAjax() {
    console.log("ERROR in ajax request");
};

function displayEarthquakes(data) {
    console.log(data);
    $("theQuakes").empty();
    for (let i = 0; i < data.length; ++i) {
        $("#theQuakes").append($("<li>" + data[i]["magnitude"] + ": " + data[i]["location"] + "</li>"));
    }
};