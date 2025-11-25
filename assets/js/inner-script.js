 // assets/js/layout.js

// Function to load partial HTML files
function loadHTML(elementId, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${filePath}: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error(error));
}

// Load header and footer when the page loads
document.addEventListener("DOMContentLoaded", function() {
  loadHTML("site-header", "../partials/inner-site-header.html");
  loadHTML("middle-header", "../partials/inner-nav.html");
  loadHTML("site-footer", "../partials/inner-site-footer.html");
});


  