console.log("welcome");

$("#request").click(function () {
    let n = $("#count").val();
    console.log(n);

    let address = "/apiv0/random/numbers/" + n;

    $.ajax({
        type: "GET",
        dataType: "json",
        url: address,
        success: displayNumbers,
        error: errorOnAjax
    });
});

function errorOnAjax() {
    console.log("ERROR in ajax request");
};

function displayNumbers(data) {
    console.log(data);
    $("#message").text(data.message);
    $("#num").text(data.num)
    $("#numbers").text(data.range.join(", "));

    var trace = {
        x: data.domain,
        y: data.range,
        mode: "lines",
        type: "scatter"
    };
    var plotData = [trace];
    var layout = {};
    Plotly.newPlot('thePlot', plotData, layout);
};

