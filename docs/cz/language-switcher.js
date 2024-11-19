document.addEventListener("DOMContentLoaded", () => {
  // Get the current path (excluding the base URL and subfolder)
  const currentPath = window.location.pathname.replace(/^\/jakubstenc\//, "");

  // Handle Czech language switch
  document.getElementById("lang-switch-czech").addEventListener("click", () => {
    let czechPath = "/jakubstenc/cz/" + (currentPath || "index.html"); // Default to "index.html" if no path
    window.location.href = czechPath;
  });

  // Handle English language switch
  document.getElementById("lang-switch-english").addEventListener("click", () => {
    let englishPath = "/jakubstenc/" + currentPath.replace(/^cz\//, ""); // Remove "cz/" prefix for English
    window.location.href = englishPath;
  });
});
