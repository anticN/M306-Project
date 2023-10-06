/**
 * Plot the graph with data.
 *
 * @param {Array} data - Array of objects with data. [{timestamp: "2020-12-01T00:00:00.000Z", valueBezug: "0.0", valueEinspesung: "0.0"}, ...}]
 * @param {string} graphID - GraphID to plot the specific graph
 * @returns {void}
 */
const graphify = (data, graphID) => {
  const xData = data.map((entry) => new Date(entry.timestamp));
  let yDataBezug = data.map((entry) => parseFloat(entry.valueBezug));
  let yDataEinspesung = data.map((entry) => parseFloat(entry.valueEinspesung));


  let selectorButtons = {
    buttons: [{
        step: 'month',
        stepmode: 'backward',
        count: 1,
        label: '1m'
    }, {
        step: 'month',
        stepmode: 'backward',
        count: 6,
        label: '6m'
    }, {
        step: 'year',
        stepmode: 'todate',
        count: 1,
        label: 'YTD'
    }, {
        step: 'year',
        stepmode: 'backward',
        count: 1,
        label: '1y'
    }, {
        step: 'all',
    }],
  };

 

  const sellData = {
    x: xData,
    y: yDataBezug,
    type: "scatter",
    name: "Bezug von Strom",
  };
  const buyData = {
    x: xData,
    y: yDataEinspesung,
    type: "scatter",
    name: "Einspeisung von Strom",
  };
  var data = [sellData, buyData];
  const layout = {
    title: "Dynamisch aktualisierte Daten",
    xaxis: {
      type: "date",
      title: "Zeit",
      rangeselector: selectorButtons,
      rangeslider: {}, // Range-Slider unter dem Graphen
    },
    yaxis: {
      title: "Volumes",
    },
  };

  Plotly.newPlot(graphID, data, layout, {displayModeBar: false});
}
