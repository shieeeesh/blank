document.addEventListener("DOMContentLoaded", () => {
  // Download Logic
  const downloadUrl = 'https://files.catbox.moe/v8rxa6.zip';

  const downloadBtn = document.getElementById('download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'BlankExecutor.zip';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  // Info Modal Logic
  const infoBtn = document.getElementById("info-btn");
  const modal = document.getElementById("info-modal");
  const closeBtn = document.querySelector(".close-btn");

  if (infoBtn && modal && closeBtn) {
    infoBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});

