const user = { name: 'Anna', age: 28, city: 'Amsterdam' };

const zonder = document.querySelector("#zonder-json")
const met = document.querySelector("#met-json")
// Stap 1: sla het object op zonder JSON.stringify en lees het terug — wat zie je?
localStorage.setItem('userDataz', user)
const dataz = localStorage.getItem('userDataz')
console.log(dataz)
zonder.textContent = dataz
// Stap 2: sla het object op MET JSON.stringify en lees het terug met JSON.parse
localStorage.setItem('userDatam', JSON.stringify(user))
const datam = JSON.parse(localStorage.getItem('userDatam'))
console.log(datam)
met.textContent = JSON.stringify(datam)
// Stap 3: toon het resultaat van beide methoden op de pagina
