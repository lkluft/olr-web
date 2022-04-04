import { getDataVar } from "./zarr_data.js";

let xdata = await getDataVar("kayser")
let ydata = await getDataVar("optical_thickness")

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
    yaxis: {title: get_label(ydata), type: 'log'},
    margin: {
        r: 0,
        t: 0,
        pad: 0,
      },
    showlegend: false,
};

var ones = {
  type: "scatter",
  mode: "lines",
  x : [10, 2700],
  y : [1, 1],
  line: {color: '#FFFFFF', width: 0.8},
};

var trace = {
  type: "scatter",
  mode: "lines",
  x : xdata.data,
  y : ydata.data,
  line: {color: '#CA3B87', width: 1},
};

var config = {
    responsive: true,
    modeBarButtonsToRemove: [
        "autoScale2d",
        "toggleSpikelines",
        'hoverClosestCartesian',
        'hoverCompareCartesian',
    ],
    toImageButtonOptions: {
        format: 'png',
        height: 700,
        width: 1200,
        scale: 1,
  },
}

Plotly.plot('spectrum', [ones, trace], layout, config);
