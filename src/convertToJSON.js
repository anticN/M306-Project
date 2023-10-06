// ich habe diese Listen: [...] und [...] wichtig zu wissen ist, dass valueBezug das gleiche ist wie sensorID 742 und valueEinspesung das gleiche wie sensorID 735. Ich möchte, dass du mir eine JavaScript Funktion schreibst, welches diese Liste in eine andere Liste konvertiert, und es für den User herunterladet. Diese neue Liste soll wie folgt aussehen: [...] ts steht für das Unix Times Stamp, also Math.floor([datum] / 1000);
const convertJSON = (data742List, data735List) => {
  //
  // Erstellen Sie leere Objekte, um Daten für sensorID 742 und 735 zu sammeln.
  const data742 = { sensorId: "ID742", data: [] };
  const data735 = { sensorId: "ID735", data: [] };
  console.log("data742List", data742List);

  // Durchlaufen Sie die Listen und füllen Sie die Datenobjekte.
  data742List.forEach((item) => {
    const ts = Math.floor(new Date(item.timestamp).getTime() / 1000);
    data742.data.push({ ts: ts.toString(), value: item.valueBezug });
  });

  data735List.forEach((item) => {
    const ts = Math.floor(new Date(item.timestamp).getTime() / 1000);
    data735.data.push({ ts: ts.toString(), value: item.valueEinspesung });
  });

  // Erstellen Sie eine Gesamtliste der Daten.
  return [data742, data735];
}