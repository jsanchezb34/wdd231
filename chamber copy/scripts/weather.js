const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption'); 

const forecastTemp = document.querySelector ('#forecast-Temp');
const weathertomorrow = document.querySelector ('#weather-tomorrow');
const weather2daysahead = document.querySelector('#weather2daysahead')


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-17.78&lon=-63.18&units=metric&appid=64168300041957387e9834fcd52ad2b0';
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-17.78&lon=-63.18&units=metric&appid=64168300041957387e9834fcd52ad2b0';

async function apifetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apifetch(url);

async function forecast(url) {
  try {
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      console.log('forecast:', data);
      forecastDisplay(data);
    } else {
      throw new error(await response.text());
    }
    }catch (error) {
      console.log(error);
    } 
}

forecast(forecasturl);

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

function forecastDisplay(data) {
  
  const firstBlock = data.list[0];
  const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

  const today = dailyForecasts[0];
  forecastTemp.innerHTML = `${today.main.temp}&deg;C`;

  const tomorrow = dailyForecasts[1];
  weathertomorrow.innerHTML = `${tomorrow.main.temp}&deg;C`;

  const twoDaysAhead = dailyForecasts[2];
  weather2daysahead.innerHTML = `${twoDaysAhead.main.temp}&deg;C`;
}



