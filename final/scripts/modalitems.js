import { motos } from "../data/motorcycles.mjs";

// motos slide
function renderSlide(containerSelector) {
  const slideContainer = document.querySelector(containerSelector);
  slideContainer.innerHTML = "";

  motos.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("moto-card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
    `;

    slideContainer.appendChild(card);
  });
}

// moto gallery
function renderMotoCards(containerSelector) {
  const slideContainer = document.querySelector(containerSelector);
  slideContainer.innerHTML = "";

  motos.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("moto-cards");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p><strong>Contact:</strong> ${item.contact}</p>
      <p><strong>Workshop:</strong> ${item.workshop}</p>
      <p>${item.description}</p>
    `;

    slideContainer.appendChild(card);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  renderSlide(".slide");     
  renderMotoCards(".motocards"); 
});
