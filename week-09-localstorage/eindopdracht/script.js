let allPokemon = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

let results = document.querySelector("#results")

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const showItems = (items) => {
  // Zet elk item om naar een <article> met map() en toon het in #results
  results.innerHTML = items.map((item, i) => {
    const isFavorite = favorites.includes(item.name);
    return `
    <article>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png" alt="">
      <p>${item.name}</p>
      <button class="favorite-btn"> ${isFavorite ? "Verwijder favoriet" : "Favoriet"}</button>
    </article>
  `}).join("")
  // Toon de afbeelding en naam van elke Pokémon
  // Voeg een <button class="favorite-btn"> toe per kaartje
  // Gebruik includes() om te checken of de naam al in favorites staat

  //if(favorites.includes(items)){
  //  document.querySelector("#favorite-btn").textContent = "favorite"
  //} 
  
  // Geef de knop een andere tekst als de Pokémon al een favoriet is
  // Voeg daarna een click event listener toe aan elke .favorite-btn
  // De index i vertelt je welke Pokémon bij welke knop hoort: items[i].name
  document.querySelectorAll('.favorite-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
    
      const name = items[i].name;
      if(favorites.includes(name)){
        favorites = favorites.filter(fav => fav !== name)
      } else {
        favorites.push(name);
      }
      // Voeg items[i].name toe aan favorites
      // Roep saveFavorites() aan
      // Roep showItems(items) opnieuw aan
      saveFavorites();
      showItems(items);
    });
  });
};

document.querySelector('#loading').textContent = 'Laden...';

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(r => r.json())
  .then(data => {
    document.querySelector('#loading').textContent = '';
    console.log(data.results)
    // Sla data.results op in allPokemon, voeg het id toe via de index
    allPokemon = data.results.map((pokemon, index) => {
      return {...pokemon, id: index + 1};
    })
    // Roep showItems() aan met allPokemon
    showItems(allPokemon)
  })
  .catch(error => {
    document.querySelector('#loading').textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });

// Maak een eventlistener voor de #show-all button
// Roep showItems() aan met allPokemon
document.querySelector("#show-all").addEventListener("click", ()=>{
  showItems(allPokemon)
})

// Maak een eventlistener voor de #show-favorites button
// Filter allPokemon op namen die in favorites staan (gebruik includes())
// Roep showItems() aan met het gefilterde resultaat
document.querySelector("#show-favorites").addEventListener("click", ()=>{
  let favorietePokemon = allPokemon.filter(pokemon => {
    return favorites.includes(pokemon.name);
  })
    
  showItems(favorietePokemon)
})
