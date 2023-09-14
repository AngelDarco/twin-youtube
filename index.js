document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".me");
  const darkContainer = document.querySelector(".dark-mode");
  const option = document.querySelectorAll(".dark-mode p");

  defaultTheme();
  
  img.addEventListener("click", () => {
    darkContainer.classList.toggle("hidden");
  });
  option.forEach((element) => {
    element.addEventListener("click", darkModeSwitch);
  });
});

const root = document.querySelector(":root");
function darkModeSwitch(e) {
  switch (e.target.textContent) {
    case "Use device theme":
    defaultTheme();
    break;
    case "Dark theme":
      darkMode();
      break;
    case "Light theme":
      lightMode();
      break;
  }
}

function defaultTheme(){
  const dark = window.matchMedia("(prefers-color-scheme: dark)");
  if(dark.matches) darkMode();
  else lightMode();
  };
function lightMode(){
  root.style.setProperty("--primary-color", "#fff");
      root.style.setProperty("--text-color", "#000");
      root.style.setProperty("--secondary-text-color", "#606060");
      root.style.setProperty("--buttons-color", "#f2f2f2");
      root.style.setProperty("--hover-buttons-color", "#0000001a");
      root.style.setProperty("--blue-color", "#065fd4");
      root.style.setProperty("--hover-blue-color", "#def1ff");
}
function darkMode() {
  root.style.setProperty("--primary-color", "#0f0f0f");
      root.style.setProperty("--text-color", "#f1f1f1");
      root.style.setProperty("--secondary-text-color", "#aaaaaa");
      root.style.setProperty("--buttons-color", "#ffffff14");
      root.style.setProperty("--hover-buttons-color", "#303030");
      root.style.setProperty("--blue-color", "#3ea6ff");
      root.style.setProperty("--hover-blue-color", "#263850");
}