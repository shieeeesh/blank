document.addEventListener("DOMContentLoaded", () => {
  const downloadUrl = 'https://files.catbox.moe/v8rxa6.zip'; // Reference your file here

  // Function to create and trigger the download link
  function triggerDownload() {
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'UPDATED.zip'; // Sets the filename for download
    a.style.display = 'none'; // Hide the link element
    document.body.appendChild(a);
    a.click(); // Simulate click to trigger download
    document.body.removeChild(a); // Remove the link element after triggering the download
  }

  // Add event listeners for both download buttons
  document.getElementById('download-btn-header').addEventListener('click', triggerDownload);
  document.getElementById('download-btn-hero').addEventListener('click', triggerDownload);
});
