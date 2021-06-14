// Function to pull names from json file and add them in the filter

var addChart = function(x_data, y_data, hoverText, metadata) {
    
    var metadata_panel = d3.select("#sameples-metadata");
    metadata_panel.html("");
    Object.entries(metadata).forEach(([key, value])=>{
        metadata_panel.append("p").text(`${key}: ${value}`);
    });

    var trace = {
        x: x_data,
        y: y_data,
        text: hoverText,
        type: 'bar',
        orientation: 'h'
    };
}