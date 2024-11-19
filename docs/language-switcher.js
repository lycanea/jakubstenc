document.addEventListener("DOMContentLoaded", () => {
  // Get the current path excluding any unwanted base paths like '/jakubstenc'
  const basePath = ""; // Set basePath as empty to ignore site subfolder
  let currentPath = window.location.pathname;

  // Remove base path if it's included in the current path (e.g., /jakubstenc/)
  if (currentPath.startsWith("/jakubstenc/")) {
    currentPath = currentPath.replace("/jakubstenc", "");
  }

  // Handle Czech language switch
  document.getElementById("lang-switch-czech").addEventListener("click", () => {
    // Generate the correct URL for Czech version
    let czechPath = "/cz" + currentPath;
    window.location.href = czechPath;
  });

  // Handle English language switch
  document.getElementById("lang-switch-english").addEventListener("click", () => {
    // Generate the correct URL for English version
    let englishPath = currentPath.replace("/cz", ""); // Remove '/cz' if present
    window.location.href = englishPath;
  });
});
