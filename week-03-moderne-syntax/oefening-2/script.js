// Voeg een event listener toe aan elke knop
const btn1 = document.querySelector("#btn-1")
const btn2 = document.querySelector("#btn-2")
const btn3 = document.querySelector("#btn-3")

// Knop 1: voeg tekst toe aan #message
btn1.addEventListener('click', () => {
  document.querySelector("#message").textContent = "Hallo"
});

// Knop 2: voeg een <li> toe aan #list met een tekst
const games = ['gta', 'fifa', 'darkest dungeon', 'god of war'];

btn2.addEventListener('click', () => {
  for (let game of games) {
    document.querySelector("#list").innerHTML += game + "<br>";
  }
});

// Knop 3: wissel de klasse 'active' op #message
btn3.addEventListener('click', () => {
    document.querySelector("#message").classList.toggle("active")
});
