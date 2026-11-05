let output = document.querySelector("#characters")
let out = ""

fetch('https://rickandmortyapi.com/api/character')
  .then(r => r.json())
  .then(data => {
    console.log(data); // Bekijk de structuur

    // De karakters zitten in data.results
    // Elk karakter heeft een 'name' en 'image' property
    // Toon de naam en afbeelding van elk karakter als <article> in #characters

    for(let cha of data.results){
      out += `
      <article>
      <h2>${cha.name}</h2>
      <img src="${cha.image}" alt="afbeelding">
      </article>
      `
    }

    output.innerHTML = out
  })
  .catch(error => console.error('Fout:', error));
