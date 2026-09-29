// Voeg een event listener toe aan de knop
const invalue = document.getElementById("input")
const list = document.getElementById("list")

document.getElementById("add").addEventListener("click", () =>{
    const para = document.createElement("li");
    para.textContent = invalue.value;
    list.appendChild(para);

    const btn = document.createElement("button");
    btn.textContent = "Verwijderen";
    para.appendChild(btn);

    btn.addEventListener("click", ()=>{
        para.remove()
    })
})
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element
