const getSDAT = () => {
  fetch("http://localhost:6969/xml")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      graphify(data, "graphsdat");
      hideLoaderv();
    })
    .catch((err) => {
      showError(
        "Falsche Daten wurden verwendet, bitte löschen Sie diese und laden Sie die korrekten Daten hoch."
      );
      hideLoaderv();
    });
};

const getESL = () => {
  fetch("http://localhost:6969/esl")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      return JSON.parse(data);
    })
    .then((antwort) => {
      console.log(antwort);
      graphify(antwort, "graphzählerstand");
      hideLoaderz();
    })
    .catch((err) => {
      showError(
        "Falsche Daten wurden verwendet, bitte löschen Sie diese und laden Sie die korrekten Daten hoch."
      );
      hideLoaderz();
    });
};

const exportJSON = () => {
  try {
    const esl = document.getElementById("graphzählerstand");

    let data742 = prepareCSV(esl, "742");
    let data735 = prepareCSV(esl, "735");
    const json = convertJSON(data742, data735);
    saveAs(json, "data.json");
  } catch (err) {
    showError(
      "Der Export kann nur mit einem dargestellten Zählerstand-Graphen durchgeführt werden."
    );
  }
};

const postJSON = () => {
  try {
    const esl = document.getElementById("graphzählerstand");

    let data742 = prepareCSV(esl, "742");
    let data735 = prepareCSV(esl, "735");
    const json = convertJSON(data742, data735);
    fetch("https://api.npoint.io/4c234b473bb6ab6d7d80", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json), // Convert the array to JSON format
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Response from server:", data);
        alert('Daten wurden erfolgreich hochgeladen.')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (err) {
    showError(
      "Der Export kann nur mit einem dargestellten Zählerstand-Graphen durchgeführt werden."
    );
  }
};

function exportCSV() {
  try {
    const esl = document.getElementById("graphzählerstand");

    console.log(esl.data);

    // CSV-Format erstellen
    let csvContent = "timestamp,value\n";

    let data742 = prepareCSV(esl, "742");
    console.log(data742);
    let csv742 = loopCSV(data742, "742", csvContent);
    downloadCSV("742", csv742);

    let data735 = prepareCSV(esl, "735");
    let csv735 = loopCSV(data735, "735", csvContent);
    downloadCSV("735", csv735);
  } catch (err) {
    showError(
      "Der Export kann nur mit einem dargestellten Zählerstand-Graphen durchgeführt werden."
    );
  }
}

function showError(errorMessage) {
  const errorElement = document.getElementById("error");
  errorElement.innerText = errorMessage;
  errorElement.classList.remove("hidden-error");

  // Verberge das Element nach 3 Sekunden
  setTimeout(() => {
    errorElement.classList.add("hidden-error");
    errorElement.innerText = ""; // Zurücksetzen des Texts
  }, 3000);
}
