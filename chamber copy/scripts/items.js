import { items } from "../data/items.mjs";

const container = document.querySelector (".cards");

items.forEach(item => {
    const card = document.createElement("section");
    card.classList.add("card");

    card.innerHTML = `
    <h2>${item.name}</h2>
    <figure>
      <img src="${item.image}" alt="${item.name}" width="300" height="200">
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button>Learn more</button>
  `;

  container.appendChild(card);
});