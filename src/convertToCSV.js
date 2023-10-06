
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