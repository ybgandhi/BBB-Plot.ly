// Function to pull names from json file and add them in the filter
//var obj = {message: 'Hello'};
//obj.message

var addChart = function(x_data, y_data, hoverText, metadata) {
    
    var metadata_panel = d3.select("#sample-metadata");
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
    var selectTag = d3.select("#selDataset");
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

var optionChanged = function(newValue) {

    d3.json("samples.json").then(function (data) {
    
    sample_new = data["samples"].filter(function(sample) {
        return sample.id == newValue;
    }); 
    console.log(sample_new);

    metadata_new = data["metadata"].filter(function(metadata) {
        return metadata.id == newValue;
    });

    Gauge(metadata_new.freq);

    x_data = sample_new[0]["otu_ids"];
    console.log(x_data);
    y_data = sample_new[0]["sample_values"];
    console.log(y_data);
    hoverText = sample_new[0]["otu_labels"];
    console.log(hoverText);
    console.log(metadata);
    console.log(metadata_new);
    addChart(x_data, y_data, hoverText, metadata_new[0]);
    });
};


d3.json("samples.json").then(function(data) {
    // populate dropdown with names
    populateDropdown(data["names"]);

    // populate the page with the first value
    x_data = data["samples"][0]["otu_ids"];
    y_data = data["samples"][0]["sample_values"];
    hoverText = data["samples"][0]["otu_labels"];
    metadata = data["metadata"][0];

    // add the chart on load
    addChart(x_data,y_data, hoverText, metadata);
    //optionChanged(x_data, y_data, hoverText, metadata);
});
