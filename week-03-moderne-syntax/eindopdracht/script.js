// Stap 1: Selecteer het formulier en de profielenlijst
const proform = document.querySelector("#profile-form")
const nameInput = document.querySelector("#name")
const roleInput = document.querySelector("#role")
const depInput = document.querySelector("#department")
const prolist = document.querySelector("#profiles-list")
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=


proform.addEventListener("submit" , (event) => {
    event.preventDefault();
    
    prolist.innerHTML = "<ul>" + "<li>" + nameInput.value + "</li>" + 
     "<li>" + roleInput.value + "</li>" + 
     "<li>" + depInput.value + "</li>" + "</ul>" 

     proform.reset()
})
// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart
