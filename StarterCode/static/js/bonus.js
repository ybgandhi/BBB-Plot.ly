// test json file

function Gauge(wfreq) {
    // enter the washing frequency between 0 and 100
    var level = parseFloat(wfreq) * 20;

    // trig to calc meter point
    var degrees = 100 - level;
    var radius = 0.5;
    var radians = (degrees * Math.PI) /180;
    var x = radius * Math.cos(radains);
    var y = radius * Math.sin(radians);

    // triangle
    //var minPath = "M -.0 -0.05 L .0 0.05 L ";
    //var path

    var data = [
        // set up
        {
            type: "scatter",
            x: [0],
            y: [0],
            marker: { size: 12, color: "850000"},
            showlegend: false,
            name: "Freq",
            text: level,
            hoverinfo: "text+name"
        },
        // add values/labels + make pretty
        {
            values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
            rotation: 90,
            text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
            textinfo: "text",
            textposition: "inside",
            marker: {
              colors: [
                "rgba(0, 105, 11, .5)",
                "rgba(10, 120, 22, .5)",
                "rgba(14, 127, 0, .5)",
                "rgba(110, 154, 22, .5)",
                "rgba(170, 202, 42, .5)",
                "rgba(202, 209, 95, .5)",
                "rgba(210, 206, 145, .5)",
                "rgba(232, 226, 202, .5)",
                "rgba(240, 230, 215, .5)",
                "rgba(255, 255, 255, 0)"
              ]
            },
            labels: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
            hoverinfo: "label",
            hole: 0.5,
            type: "pie",
            showlegend: false 
        }
    ];
    var layout = {
        shapes: [
          {
            type: "path",
            path: path,
            fillcolor: "850000",
            line: {
              color: "850000"
            }
          }
        ],
        title: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week",
        height: 500,
        width: 500,
        xaxis: {
          zeroline: false,
          showticklabels: false,
          showgrid: false,
          range: [-1, 1]
        },
        yaxis: {
          zeroline: false,
          showticklabels: false,
          showgrid: false,
          range: [-1, 1]
        }
      };

      var PRINT = document.getElementById("gauge");
      Plotly.newPlot(PRINT, data, layout);
}
