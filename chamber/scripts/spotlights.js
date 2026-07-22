fetch("data/members.json")
  .then(response => response.json())
  .then(data => {
    const companies = data.Companies; // asumiendo que tu JSON tiene la clave "Companies"
    const spotlights = document.getElementById("spotlights");

    // Buscar un miembro de nivel 2 y uno de nivel 3
    const level2 = companies.find(c => c.membershipLevel === 2);
    const level3 = companies.find(c => c.membershipLevel === 3);

    const spotlightMembers = [];
    if (level2) spotlightMembers.push(level2);
    if (level3) spotlightMembers.push(level3);

    // Renderizar las tarjetas
    spotlightMembers.forEach(company => {
      const card = document.createElement("div");
      card.classList.add("company-card");

      card.innerHTML = `
 <img src="${company.image.replace('../', '')}" alt="${company.name}">
 <p><strong>${company.name}</strong></p>
         <div class="namenumber">
            <span>${company.address}</span>
            <span>${company.phone}</span>
        </div>
      `;

      spotlights.appendChild(card);
    });
  })
  .catch(error => console.error("Error cargando members.json:", error));
