let allPokemon = [];

let list = document.querySelector("#pokemon-list")
let counter = document.querySelector("#counter")
const search = document.querySelector("#search-bar")

const showPokemon = (pokemons) =>{
  list.innerHTML = ""
  
    list.innerHTML += pokemons.map((pokemon) => `
    <article>
    <h1>${pokemon.name}</h1>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
    </article>`
  ).join("")

  counter.textContent = `Pokemons getoond: ${pokemons.length}`
}




// De API geeft een object terug met een 'results' array
// Elk item heeft een 'name' property
// Gebruik console.log(data) om de structuur te bekijken

// De afbeelding van een Pokémon staat op:
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
// Sla het id op via de index bij het laden: { ...pokemon, id: index + 1 }



fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Bekijk de structuur
    allPokemon = data.results.map((pokemon, index) => {
      return { ...pokemon, id: index + 1 };
    });;

    showPokemon(allPokemon);

    // Sla data.results op in allPokemon, voeg het id toe via de index
    // Toon alle Pokémon in #pokemon-list met naam en afbeelding
    // Toon het aantal in #counter
  })
  .catch(error => console.error('Fout:', error));

// Voeg een event listener toe aan #search-bar
// Filter allPokemon op naam en herrender de lijst

filterPokemon = () => {
  const searchBarInput = search.value.toLowerCase();
  filteredPokemon = allPokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(searchBarInput));

  showPokemon(filteredPokemon);
}

search.addEventListener("input", ()=>{
  filterPokemon();
  // showPokemon(allPokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(searchBarInput))
})
