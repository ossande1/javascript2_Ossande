const input = document.querySelector("#input")
const ops = document.querySelector("#save")
const oph = document.querySelector("#retrieve")
const out = document.querySelector("#result")

// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
ops.addEventListener("click", ()=>{
    const value = input.value
    localStorage.setItem("set", value)
})
// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
oph.addEventListener("click", ()=>{
    const get = localStorage.getItem("set")
    console.log(get)
    out.innerHTML = get !== null
    ? `Result: ${get}` 
    : "Niets opgeslagen"
})
// Null-check: toon een melding als er nog niets opgeslagen is
