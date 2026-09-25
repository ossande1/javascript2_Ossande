const title = document.getElementById("title")
const btn = document.getElementById("btn")
const section = document.getElementById("section")

let naam = "Ossande"
let opleiding = "Software_developer"
let aantalKlikken = 0
// let voor aantalKlikken omdat het gaat veranderen

const berekenPunten = () =>{

  return aantalKlikken * 10

}

btn.addEventListener("click", () =>{
    aantalKlikken += 1

    title.textContent = `Hoi, ik ben ${naam} en ik doe ${opleiding}.`

    title.classList.toggle('active')

    const para = document.createElement("p");
    para.textContent = `Klik ${aantalKlikken}: je hebt nu ${berekenPunten()}`;
    section.appendChild(para);
    
})