function handleFileUpload(event) {
    const files = event.target.files;
    const formData = new FormData();

    for (const file of files) {
        const allowedExtensions = ['sdat', 'esl', 'xml'];
        const fileExtension = file.name.split('.').pop().toLowerCase();

        if (allowedExtensions.includes(fileExtension)) {
            if (/^\d/.test(file.name)) {
                // Files starting with a number go to "uploads" directory
                formData.append('files', file, `uploads/${file.name}`);
            } else {
                // Other files go to "SDAT-Files" directory
                formData.append('files', file, `SDAT-Files/${file.name}`);
            }
        } else {
            console.warn(`File ${file.name} is not a valid XML file (sdat, esl, or xml). Skipping...`);
            alert(`File ${file.name} is not a valid XML file (sdat, esl, or xml). It will be skipped.`);
        }
    }

    if (formData.getAll('files').length > 0) {
        fetch('http://localhost:3001/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
        })
        .catch(error => console.error('Error uploading files:', error));
    } else {
        console.warn('No valid XML files selected for upload.');
        alert('No valid XML files selected for upload.');
    }
}

document.getElementById('delete-files').addEventListener('click', () => {
    fetch('http://localhost:3001/deleteFiles', {
      method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
    })
    .catch(error => console.error('Error deleting files:', error));
  });



const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', handleFileUpload);
