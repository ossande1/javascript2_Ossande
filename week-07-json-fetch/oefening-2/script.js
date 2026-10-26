// Vul eerst movies.json met minimaal 4 films:
// [{"title":"","director":"","year":0,"genre":""}]

// Schrijf daarna de fetch zelf (zelfde patroon als oefening 1)
let output = document.getElementById("films")
let out = ""

fetch('./movies.json')
    .then(response => response.json())
    .then(films => {
        
        for(let film of films){
            out += `
            <li>
            title: ${film.title}, director: ${film.director}, year: ${film.year}, genre: ${film.genre}
            </li>
            `
        }

        output.innerHTML = out
    })
    .catch(error => console.error('Fout:', error));