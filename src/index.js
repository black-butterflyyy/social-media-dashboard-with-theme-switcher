const checkboxInput = document.getElementById("dark-mode");

function changeTheme() {
  const bodyElement = document.querySelector("body");
  bodyElement.classList.toggle("dark-theme");
}

checkboxInput.addEventListener("change", changeTheme);
