// Function to pull names from json file and add them in the filter
var obj = {message: 'Hello'};
obj.message

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

    var data2 = [trace2];

    Plotly.newPlot('bubble', data2);


};

var populateDropdown = function(names) {
    var selecTag = d3.select("#selDataset");
    var options = selectTag.selectAll('option').data(names);

    options.enter()
        .append('option')
        .attr('value',function(d){
            return d;
        })
        .text(function(d) {
            return d;
        })
};

d3.json("static/samples.json").then(function(data) {
    // populate dropdown with names
    populateDropdown(data["names"]);

    // populate the page with the first value
    x_data = data["samples"][0]["otu_ids"];
    y_data = data["samples"][0]["sample_values"];
    hoverText = data["samples"][0]["otu_labels"];
    metadata = data["metadata"][0];

    // add the chart on load
    addChart(x_data,y_data, hoverText, metadata);
});
