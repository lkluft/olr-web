import { getDataVar } from "./zarr_data.js";


var layout = {
    font: {size: 18, family: "Roboto Slab"},
    paper_bgcolor: "#0E0E10",
    plot_bgcolor: "#0E0E10",
    xaxis: {color: "#FFFFFF"},
    yaxis: {color: "#FFFFFF"},
};

var trace = {
  type: "scatter",
  mode: "lines",
  x : await getDataVar("frequency"),
  y : await getDataVar("outgoing_longwave_radiation"),
  line: {color: '#FF5722', width: 1},
};

Plotly.plot(document.getElementById('spectrum'), [trace], layout);
