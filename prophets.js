const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');



const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        const card = document.createElement('section');
        const h2 =document.createElement('h2');
        const birth = document.createElement('p');
        const place = document.createElement('p')
        const picture = document.createElement('img');
        

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birth.textContent = `Birthdate: ${prophet.birthdate}`;
        place.textContent = `Birthplace: ${prophet.birthplace}`;
        picture.setAttribute('src', prophet.imageurl);
        picture.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        picture.setAttribute('loading', 'lazy');

        card.appendChild(h2);
        card.appendChild(birth);
        card.appendChild(place);
        card.appendChild(picture);
        cards.appendChild(card);
    });
};

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}
getProphetData();