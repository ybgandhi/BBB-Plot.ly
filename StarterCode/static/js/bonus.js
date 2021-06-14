// test json file

function Gauge(wfreq) {
    // enter the washing frequency between 0 and 100
    var level = parseFloat(wfreq) * 20;

    // trig to calc meter point
    var degrees = 100 - level;
    var radius = 0.5l
    var radians = (degrees * Math.PI) /180;
    var x = radius * Math.cos(radains);
    var y = radius * Math.sin(radians);

}
