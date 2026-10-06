const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];

// Sectie 1: zoek de eerste naam die begint met de ingevoerde letter
//           gebruik find() + startsWith() + toLowerCase(). 
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
const input1 = document.getElementById("search-find")
const output1 = document.getElementById("output-find")

input1.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        const zoek1 = names.find(n => n.toLowerCase().startsWith(input1.value.toLowerCase()))
        console.log(zoek1)
        output1.textContent = zoek1

        input1.value = ""
    }
})
// Sectie 2: controleer of een ingevoerde naam in de lijst staat (uitkomst is true of false)
//           gebruik includes() + toLowerCase()
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
const input2 = document.getElementById("search-includes")
const output2 = document.getElementById("output-includes")

input2.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        const lower = names.map(n => n.toLowerCase())
        const zoek2 = lower.includes(input2.value.toLowerCase())
        console.log(zoek2)
        output2.textContent = zoek2

        input2.value = ""
    }
})

