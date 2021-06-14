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
    
    var data = [trace];

    Plotly.newPlot('bar', data);

    var trace2 = {
        x: x_data,
        y: y_data,
        text: hoverText,
        mode: 'markers',
        marker: {
            size: y_data,
            color: x_data
        }
    };

    
}