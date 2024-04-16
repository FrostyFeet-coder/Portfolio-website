function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function changeContent(element) {
  element.textContent = "©Code By Ansh";
}
function restoreContent(element) {
  element.textContent = "©Ansh Wasan";
}

