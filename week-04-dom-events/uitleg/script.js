const button = document.getElementById("btn");
let songList = document.getElementById("songlist");
const songInput = document.getElementById("songinput");

button.addEventListener("click", ()=>{
    const input = songInput.value;

    const lijst = document.createElement("li");
    lijst.textContent = input;
    songList.appendChild(lijst);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "verwijderen";
    lijst.appendChild(deleteButton)

    deleteButton.addEventListener("click", ()=>{
        lijst.remove()
    })
})