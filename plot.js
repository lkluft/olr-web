import { getDataVar } from "./zarr_data.js";

let xdata = await getDataVar("kayser")
let ydata = await getDataVar("outgoing_longwave_radiation")

function get_label(data) {
    return data.shortname.concat(" / ", data.units);
};

let style = window.getComputedStyle(document.getElementById('spectrum'));
var layout = {
    font: {
        family: style.getPropertyValue('font-family'),
        color: style.getPropertyValue('color'),
        size: style.getPropertyValue('font-size').slice(0, -2),
    },
    paper_bgcolor: style.getPropertyValue('background-color'),
    plot_bgcolor: style.getPropertyValue('background-color'),
    xaxis: {title: get_label(xdata)},
    yaxis: {title: get_label(ydata)},
};

var trace = {
  type: "scatter",
  mode: "lines",
  x : xdata.data,
  y : ydata.data,
  line: {color: '#888CFF', width: 1},
};

var config = {
    responsive: true,
    displayModeBar: false,
}

Plotly.plot('spectrum', [trace], layout, config);
