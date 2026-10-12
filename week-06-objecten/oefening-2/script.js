const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];


// 1. Toon in #origineel de originele lijst met alleen namen en steden.
for(let p of people){
  const list = document.createElement("li")
  list.textContent = `Mijn naam is ${p.name} en ik woon in ${p.city}`
  document.querySelector("#origineel").appendChild(list)
}
//    Gebruik destructuring in je .map().
// 2. Maak met .map() en de spread operator een nieuwe array waarin
//    de stad van elke persoon is gewijzigd naar 'Den Haag'.
people.map(pleople => pleople.city = "Den haag")
//    De originele people-array moet onveranderd blijven.
// 3. Toon deze nieuwe lijst in #kopie, ook met destructuring.
for(let p of people){
  const list = document.createElement("li")
  list.textContent = `Mijn naam is ${p.name} en ik woon in ${p.city}`
  document.querySelector("#kopie").appendChild(list)
}