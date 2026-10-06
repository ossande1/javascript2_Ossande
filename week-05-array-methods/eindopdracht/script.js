const products = [
  { name: 'Laptop Pro', category: 'Electronics', price: 1299, stock: true },
  { name: 'Draadloze muis', category: 'Electronics', price: 29, stock: true },
  { name: 'USB-C hub', category: 'Electronics', price: 49, stock: false },
  { name: 'Bureaulamp', category: 'Kantoor', price: 35, stock: true },
  { name: 'Notitieboek', category: 'Kantoor', price: 8, stock: true },
  { name: 'Pennenset', category: 'Kantoor', price: 12, stock: false },
  { name: 'Koptelefoon', category: 'Audio', price: 89, stock: true },
  { name: 'Bluetooth speaker', category: 'Audio', price: 59, stock: true },
  { name: 'Webcam HD', category: 'Electronics', price: 79, stock: false },
  { name: 'Muismat XL', category: 'Kantoor', price: 19, stock: true },
  { name: 'Monitor 27"', category: 'Electronics', price: 349, stock: true },
  { name: 'Desk organizer', category: 'Kantoor', price: 24, stock: true },
];

const input = document.getElementById("search-bar")

let searchTerm = '';
let sorting = '';

const showProducts = (products) => {
  // Toon elk product als een <article> in #products 
  const pr = document.querySelector("#products")
  pr.innerHTML = ""
  for(let product of products){
    pr.innerHTML += `<article><h3>${product.name}</h3><p>${product.category}</p><p>${product.price}</p><p>${product.stock ? "Op voorraad" : "Niet op voorraad"}</p></article>`
  }

  console.log(pr)
  // Laat in #counter de hoeveelheid producten zien
  document.querySelector("#counter").textContent = products.length
};

const filterProducts = () => {
  // Maak een variabele 'filtered' aan door de products array te filteren op searchTerm
  let filtered = '';
  // Gebruik hiervoor filter() en includes() en toLowerCase()
 // const lower = products.map(p => p.toLowerCase());
  searchTerm = products.includes(input.value.toLowerCase());
  filtered = products.filter(p => p.name.toLowerCase().startsWith(input.value.toLowerCase()));
  //filtered = products.filter(p => p.stock === true);
  // Filter hier op sorting:
  // als sorting 'low' is, sorteer van laag naar hoog op prijs
  // als sorting 'high' is, sorteer van hoog naar laag op prijs
  if(sorting === 'low'){
    products.sort((a, b) => b.price - a.price)
  } else if(sorting === 'high'){
    products.sort((a, b) => a.price - b.price)
  };

  showProducts(filtered);
};

// Maak een eventlistener voor de #search-bar input
// Sla de waarde op in de searchTerm variabele en roep filterProducts() aan
input.addEventListener("keypress", function(e){
  if (e.key === "Enter"){
    filterProducts()
    input.value = ""
  }
})

// Maak een eventlistener voor de #sort-low button
// Zet sorting op 'low' en roep filterProducts() aan
document.querySelector("#sort-low").addEventListener("click", () =>{
  sorting = 'low'

  filterProducts()
})

// Maak een eventlistener voor de #sort-high button
// Zet sorting op 'high' en roep filterProducts() aan
document.querySelector("#sort-high").addEventListener("click", () =>{
  sorting = 'high'

  filterProducts()
})

filterProducts();
