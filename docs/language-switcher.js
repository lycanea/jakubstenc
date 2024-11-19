document.addEventListener("DOMContentLoaded", () => {
  // Get the current path excluding the base URL
  const currentPath = window.location.pathname.replace("/jakubstenc/", "");

  // Handle the Czech language switch
  document.getElementById("lang-switch-czech").addEventListener("click", () => {
    window.location.href = "/jakubstenc/cz/" + (currentPath || "index.html");
  });

  // Handle the English language switch
  document.getElementById("lang-switch-english").addEventListener("click", () => {
    // If already in the Czech folder, strip "/cz/" from the path
    const englishPath = currentPath.replace(/^cz\//, "");
    window.location.href = "/jakubstenc/" + (englishPath || "index.html");
  });
});
