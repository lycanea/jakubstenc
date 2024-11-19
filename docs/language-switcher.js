document.addEventListener("DOMContentLoaded", function () {
  // Get the current path
  const currentPath = window.location.pathname;

  // Determine if we're in the Czech or English folder
  const isCzech = currentPath.includes("/cz/");

  // Language switcher links
  const czechLink = document.querySelector(".lang-switch-czech");
  const englishLink = document.querySelector(".lang-switch-english");

  if (czechLink && englishLink) {
    if (isCzech) {
      // Switch to English version (remove /cz/)
      englishLink.href = currentPath.replace("/cz/", "/");
    } else {
      // Switch to Czech version (add /cz/ before file name)
      const pathParts = currentPath.split("/");
      pathParts.splice(pathParts.length - 1, 0, "cz");
      czechLink.href = pathParts.join("/");
    }
  }
});
