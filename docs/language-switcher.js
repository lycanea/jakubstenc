document.addEventListener("DOMContentLoaded", () => {
  // Get the current path excluding the base path (like '/jakubstenc')
  const basePath = "/jakubstenc";  // Set the base path of your site
  let currentPath = window.location.pathname.replace(basePath, "");

  // Handle Czech language switch
  document.getElementById("lang-switch-czech").addEventListener("click", () => {
    // Generate the correct URL for Czech version
    let czechPath = basePath + "/cz" + (currentPath || "/index.html");
    window.location.href = czechPath;
  });

  // Handle English language switch
  document.getElementById("lang-switch-english").addEventListener("click", () => {
    // Generate the correct URL for English version
    let englishPath = basePath + (currentPath || "/index.html").replace("/cz", "");
    window.location.href = englishPath;
  });
});
