const graphify = (antwort, graphID) => {
  const xData = antwort.map((entry) => new Date(entry.timestamp));
  let yDataBezug = antwort.map((entry) => parseFloat(entry.valueBezug));
  let yDataEinspesung = antwort.map((entry) => parseFloat(entry.valueEinspesung));


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
