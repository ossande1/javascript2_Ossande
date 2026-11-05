// API_KEY wordt geladen vanuit config.js (zie config.example.js voor instructies)
const form = document.querySelector("#search-form")
const input = document.querySelector("#city-input")
const info = document.querySelector("#weather-info")

const showWeather = (data) => {
  console.log(data)
  // Zet de weerinformatie van data om naar HTML in #weather-info
  // Toon: stadsnaam, weer-icon, temperatuur, gevoelstemperatuur, luchtvochtigheid en windsnelheid
  // Rond de temperaturen af met Math.round()
  // Gebruik console.log(data) om de structuur te bekijken
  // De icon-URL is: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  info.innerHTML = `
  <article>
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  <h2>${data.name}</h2>
  <p>Temperatuur: ${Math.round(data.main.temp)} graden</p>
  <p>Feels like: ${data.main.feels_like} graden</p>
  <p>Luchtvochtigheid: ${data.main.humidity}</p>
  <p>Windsnelheid: ${data.wind.speed}km/uur</p>

  </article>`
  
};

const getWeather = (city) => {
  
  // Doe een fetch naar de OpenWeather API met city en A`PI_KEY
  // De URL is: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  // Gebruik console.log(data) om de structuur te bekijken
  // Roep showWeather(data) aan met de response
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(r => r.json())
    .then(data => {
      showWeather(data)
    }
  )
  .catch(error => console.error('Fout:', error));
};

// Voeg hier een submit event listener toe aan #search-form
// Gebruik e.preventDefault() zodat de pagina niet herlaadt
// Lees de waarde uit #city-input en roep getWeather(city) aan
// Maak de input daarna leeg

form.addEventListener("submit", (event) =>{
  event.preventDefault()
  
  const cityInput = document.querySelector("#city-input");
  const city = cityInput.value;

  getWeather(city);

  cityInput.value = "";

})
