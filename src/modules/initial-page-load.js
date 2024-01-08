const navContent = () => {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const listNames = ["MENU", "LOCATION", "CONTACT", "ABOUT"];

  for (let i = 0; i < listNames.length; i++) {
    const li = document.createElement("li");
    li.className = "tab";
    li.textContent = listNames[i];

    ul.appendChild(li);
  }

  nav.appendChild(ul);

  return nav;
}

const headerContent = () => {
  const section = document.createElement("section");
  section.className = "load-page-section";

  const h1 = document.createElement("h1");
  h1.textContent = "Vin's Resto";

  const p = document.createElement("p");
  p.textContent = "Order now or crave later."

  section.appendChild(h1);
  section.appendChild(p);

  return section;
}

const loadPage = () => {
  const content = document.getElementById("content");
  content.appendChild(navContent());
  content.appendChild(headerContent());
}

export { loadPage }