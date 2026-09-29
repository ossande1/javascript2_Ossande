// Selecteer alle vakken met querySelectorAll als houvast
const boxes = document.querySelectorAll("div");
// Loop met een for of loop door elk vak en voeg aan elk vak een click-event toe dat de klasse 'active' wisselt

//for (let box of boxes){
 //   box.addEventListener("click", ()=> {
 //       box.classList.toggle("active")
 //   })
//}

boxes.forEach(box =>{
    box.addEventListener("click", ()=> {
        box.classList.toggle("active")
    });
})