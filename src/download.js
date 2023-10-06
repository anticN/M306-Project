// in javascript, how can i make the user downlaod an array as a json?
const saveAs = (array, filename = "data.json") => {
  // 1. Convert array to JSON-formatted string
  const jsonString = JSON.stringify(array, null, 2);

  // 2. Create a blob from the JSON string
  const blob = new Blob([jsonString], { type: "application/json" });

  // 3. Create an Object URL for the blob
  const url = URL.createObjectURL(blob);

  // 4. Create a temporary anchor element
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;

  // Append the anchor to the document, this is necessary for Firefox
  document.body.appendChild(a);

  // 5. Simulate a click to start the download
  a.click();

  // Clean up: remove the anchor from the document and revoke the Object URL
  document.body.removeChild(a);
  // 6. Revoke the Object URL
  URL.revokeObjectURL(url);
}

function downloadCSV(id, csvContent) {
  // CSV-Datei zum Download anbieten
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `Sensor_${id}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}