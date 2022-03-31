import { getDataVar } from "./zarr_data.js";

let style = window.getComputedStyle(document.getElementById('spectrum'));
var layout = {
    font: {
        family: style.getPropertyValue('font-family'),
        color: style.getPropertyValue('color'),
        size: style.getPropertyValue('font-size').slice(0, -2),
    },
    paper_bgcolor: style.getPropertyValue('background-color'),
    plot_bgcolor: style.getPropertyValue('background-color'),
    xaxis: {title: "Frequency / Hz"},
    yaxis: {title: "OLR / Wm<sup>−2</sup>cm"},
};

var trace = {
  type: "scatter",
  mode: "lines",
  x : await getDataVar("frequency"),
  y : await getDataVar("outgoing_longwave_radiation"),
  line: {color: '#E6722E', width: 1},
};

Plotly.plot(document.getElementById('spectrum'), [trace], layout);
