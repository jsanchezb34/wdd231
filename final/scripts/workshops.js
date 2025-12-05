document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("data/workshops.json");
    const data = await response.json();

    const container = document.getElementById("workshopscard");
    const modal = document.getElementById("workshopModal");
    const modalDetails = document.getElementById("modalDetails");
    const modalGallery = document.getElementById("modalGallery");
    const closeBtn = document.getElementById("closeModal");


    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("workshop-card");
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name} logo">
        <h3>${item.name}</h3>
        <p>${item.specialty}</p>
      `;

      card.addEventListener("click", () => {
        modalDetails.innerHTML = `
          <h2>${item.name}</h2>
           <img src="${item.image}">
          <p><strong>Specialty:</strong> ${item.specialty}</p>
          <p><strong>Address:</strong> ${item.address}</p>
          <p><strong>Phone:</strong> ${item.phone}</p>
          <p><strong>Email:</strong> ${item.email}</p>
          <p><strong>Founded:</strong> ${item.founded}</p>
        `;

        modalGallery.innerHTML = "";
        if (item.photos && item.photos.length > 0) {
          item.photos.forEach(photo => {
            const img = document.createElement("img");
            img.src = photo;
            img.alt = `${item.name} photo`;
            modalGallery.appendChild(img);
          });
        }

        modal.showModal();
      });

      container.appendChild(card);
    });

    // Cerrar modal
    closeBtn.addEventListener("click", () => {
      modal.close();
    });
  } catch (error) {
    console.error("Error cargando workshops:", error);
  }
});