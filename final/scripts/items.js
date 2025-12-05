

//. . . . . . show workshops. . . . .   . . .
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("data/workshops.json");
    const data = await response.json();

    const slideContainer = document.querySelector(".workshops");

    data.forEach(item => {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.projectName || "talleres";
      slideContainer.appendChild(img);
    });
  } catch (error) {
    console.error("Error cargando JSON:", error);
  }
});

// . . ... .. . show constructors . . . . . 

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("data/constructors.json");
    const data = await response.json();

    const slideContainer = document.getElementById("constructors"); // ✅ ahora coincide
    slideContainer.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("constructor-card");

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p><strong>Contact:</strong> ${item.contact}</p>
        <p><strong>Workshop:</strong> ${item.workshop}</p>
        <p>${item.description}</p>
      `;

      slideContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error cargando JSON:", error);
  }
});

