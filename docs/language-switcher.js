document.addEventListener("DOMContentLoaded", () => {
  // Get the current path excluding any unwanted base paths like '/jakubstenc'
  let currentPath = window.location.pathname;

  // Remove '/jakubstenc' from the current path if present
  if (currentPath.startsWith("/jakubstenc/")) {
    currentPath = currentPath.replace("/jakubstenc", "");
  }

  // Handle Czech language switch
  document.getElementById("lang-switch-czech").addEventListener("click", () => {
    // Generate the correct URL for Czech version
    let czechPath = "/cz" + currentPath; // Add '/cz' before the current path
    window.location.href = czechPath;
  });

  // Handle English language switch
  document.getElementById("lang-switch-english").addEventListener("click", () => {
    // Generate the correct URL for English version
    let englishPath = currentPath.replace("/cz", ""); // Remove '/cz' from the current path
    window.location.href = englishPath;
  });
});
