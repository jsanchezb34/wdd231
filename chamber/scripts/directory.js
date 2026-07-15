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
      <p>${company.industry}</p>
      <p>${company.address}</p>
      <p>${company.phone}</p>
      <p>${company.founded}</p>
      <a href="${company.website}" target="_blank">Visit Website</a>
    `;
    container.appendChild(card);
    });
}

getcompanies();

const gridButton = document.getElementById ('showgrid');
const listButton = document.getElementById ('showlist');
const members =  document.getElementById ('members');

gridButton.addEventListener('click', () => {
    members.classList.add('grid');
    members.classList.remove('list');
});

listButton.addEventListener ('click', () => {
    members.classList.add('list');
    members.classList.remove('grid');
});