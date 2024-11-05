import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";

console.log("Hello Coders! :)");

document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".burger");
  const navList = document.querySelector("#nav-list");

  burgerButton.addEventListener("click", (event) => {
    document.body.classList.toggle("open");
    const isOpen = document.body.classList.contains("open");
    event.target.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
      navList.removeAttribute("hidden");
      navList.focus();
    } else {
      navList.setAttribute("hidden", true);
    }
  });
});
