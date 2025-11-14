const url = 'data/members.json';

async function getcompanies() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.Companies);    
}

function displayCompanies(Companies){
    const container = document.querySelector('#members');

    Companies.forEach(company => {
        const card = document.createElement('div');
        card.classList.add('company-card');

        card.innerHTML = `
      
      <img src="images/${company.image}" alt="${company.name}">
      <p>${company.name}</p>
      <p><strong>Industry:</strong> ${company.industry}</p>
      <p><strong>Address:</strong> ${company.address}</p>
      <p><strong>Phone:</strong> ${company.phone}</p>
      <p><strong>Founded:</strong> ${company.founded}</p>
      <a href="${company.website}" target="_blank">Visit Website</a>
    `;
    container.appendChild(card);
    });
}

getcompanies();