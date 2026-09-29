// Selecteer het formulier, invoerveld, takenlijst en teller
const teller = document.getElementById("counter");
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("tasks");
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
// toonTaken() — werk de teller bij
// Voeg listeners toe aan het formulier en de taken
let totaal = 0

form.addEventListener("submit", ()=>{
    event.preventDefault()

    totaal++;
    
    teller.textContent = `${totaal} taken`

    const taaklist = document.createElement("li");
    taaklist.textContent = input.value;
    list.appendChild(taaklist)

    const check = document.createElement("input");
    check.setAttribute("type", "checkbox")
    taaklist.appendChild(check)

    const verwij = document.createElement("button");
    verwij.textContent = "Verwijderen"
    taaklist.appendChild(verwij)

    verwij.addEventListener("click", ()=>{
        taaklist.remove()
        totaal--;

        teller.textContent = `${totaal} taken`
    })

})
