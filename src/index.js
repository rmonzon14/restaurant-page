import "./styles/style.css"
import { loadPage } from "./modules/initial-page-load";

// Loads the initial page.
loadPage();

const menu = document.getElementsByClassName("tab")[0];
const location = document.getElementsByClassName("tab")[1];
const contact = document.getElementsByClassName("tab")[2];
const about = document.getElementsByClassName("tab")[3];

// Loads the content of the menu tab module.
menu.addEventListener("click", () => {
  menu.classList.add("onClicked");

  const current = menu.textContent;

  removeStyle(current);
})

// Loads the content of the location tab module.
location.addEventListener("click", () => {
  location.classList.add("onClicked");

  const current = location.textContent;

  removeStyle(current);
})

// Loads the content of the contact tab module.
contact.addEventListener("click", () => {
  contact.classList.add("onClicked");

  const current = contact.textContent;

  removeStyle(current);
})


// Loads the content of the about tab module.
about.addEventListener("click", () => {
  about.classList.add("onClicked");

  const current = about.textContent;

  removeStyle(current);
})

const removeStyle = (current) => {
  const tabs = document.getElementsByClassName("tab");
  const tabsArray = [...tabs];

  tabsArray.forEach(element => {
    if (element.textContent != current) {
      element.classList.remove("onClicked");
    }
  });
}