document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("data/motorcycles.json");
    const data = await response.json();

    const slideContainer = document.querySelector(".slide");

    data.forEach(item => {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.projectName || "Moto personalizada";
      slideContainer.appendChild(img);
    });
  } catch (error) {
    console.error("Error cargando JSON:", error);
  }
});

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

