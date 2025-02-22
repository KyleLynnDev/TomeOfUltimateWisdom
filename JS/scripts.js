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
    loadPartial("header-container", "../partials/header.html");
    loadPartial("sidebar-container", "../partials/sidebar.html");
    loadPartial("footer-container", "../partials/footer.html");
  });
  