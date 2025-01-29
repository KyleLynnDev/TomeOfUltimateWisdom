// scripts.js
function loadPartial(elementId, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(err => console.error("Error loading partial:", err));
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    loadPartial("header-container", "header.html");
    loadPartial("sidebar-container", "sidebar.html");
    loadPartial("footer-container", "footer.html");
  });
  