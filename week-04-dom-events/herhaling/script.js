const form = document.querySelector("#shop-form")
const input = document.querySelector("#shop-input")
const counter = document.querySelector("#counter")
const list = document.querySelector("#list")
let aantal = 1
let aantalchecks = 0

const updateTeller = () =>{
    const boxes = document.querySelectorAll("li")
    console.log(boxes);

    aantal = boxes.length;
    
   // boxes.forEach(box =>{
    //    if(box.checked){
      //      aantalchecks++;
        //    cccc};
    // });

    counter.textContent = `${aantalchecks} / ${aantal}`;
};

form.addEventListener("submit", (event)=>{
    event.preventDefault()

    let inputval = input.value.trim()

    if(!inputval){
        return event.stopPropagation()
    }

    const listitem = document.createElement("li");
    listitem.textContent = inputval
    list.appendChild(listitem)

    const check = document.createElement("input");
    check.setAttribute("type", "checkbox")
    listitem.appendChild(check)
    check.addEventListener("click", ()=>{
         if(check.checked == true){
           
           aantalchecks++;
            updateTeller()
       } else if(check.checked == false){
            aantalchecks--;
             updateTeller()
        }
       
        
        listitem.classList.toggle("gekocht")
        counter.textContent = `${aantalchecks} / ${aantal}`
           
    })

    const verwij = document.createElement("button");
    verwij.textContent = "Verwijderen"
    listitem.appendChild(verwij)

    verwij.addEventListener("click", ()=>{
        listitem.remove()
        if(check.checked == true){
            aantalchecks--;
            updateTeller()
       } else if(check.checked == false){
            updateTeller()
        }
       

        counter.textContent = `${aantalchecks} / ${aantal}`
    })

    inputval = "";

    updateTeller()
})