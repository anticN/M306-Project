/*
loop through the csv data and add it to the csvContent

@param {array} arrData - array of data to loop through
@param {string} id - id of the graph to loop through
@param {string} csvContent - csvContent to add the data to

@returns {string} csvContent - csvContent with the added data
*/
function loopCSV(arrData, id, csvContent) {
  arrData.forEach((row) => {
    let dateObject = new Date(row.timestamp);
    // Unix-Timestamp erhalten (in Millisekunden)
    const unixTimestampMilliseconds = dateObject.getTime();

    // Unix-Timestamp in Sekunden umwandeln (durch 1000 teilen)
    const unixTimestampSeconds = Math.floor(unixTimestampMilliseconds / 1000);
    if (id == "742") {
      csvContent += `${unixTimestampSeconds},${row.valueBezug}\n`;
    } else if (id == "735") {
      csvContent += `${unixTimestampSeconds},${row.valueEinspesung}\n`;
    }
  });
  return csvContent;
}

/**
 * extract the data from the graph and prepare it for the csv export
 * 
 * @param {*} graph 
 * @param {*} id 
 * @returns object with the timestamp and the value
 */
function prepareCSV(graph, id) {
  const data = graph.data[0].x.map((timestamp, index) => {
    if (id == "742") {
      return {
        timestamp: timestamp,
        valueBezug: graph.data[0].y[index],
      };
    } else if (id == "735") {
      return {
        timestamp: timestamp,
        valueEinspesung: graph.data[1].y[index],
      };
    }
  });
  return data;
}