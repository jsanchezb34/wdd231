const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');
async function getProphetData(){
    const response = await fetch("https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json");
    const data = await response.json();
    console.table(data.prophets);
}
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach(prophet) => {

        const card = document.createElement('section');
        const h2 =document.childElement('h2');
        const birth = document.createElement('p');
        const place = document.createElement('p')
        const picture = document.createElement('img');
    

    h2.textContent = "${prophet.name} $prophet.lastname";
    birth.textContent ="${birthdate}";
    place.textContent = "${birthplace}";
    picture.setAtributte ('src', prophet.imageurl);
    picture.setAtributte ('alt', 'portrait of ${prophet.name} ${prophet.lastname}');
    picture.setAtributte ('loading', 'lazy'); 

    card.appendChild();
    card.appendChild();
    card.appendChild();
    card.appendChild();
    card.appendChild();
});
};
