// Stap 1: Schrijf calculateTotal(bedrag, korting)
function calculateTotal(bedrag, korting){
  let discountAmount = bedrag * (korting / 100);
  let finalPrice = bedrag - discountAmount;
  return finalPrice;
};
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
document.getElementById('discount-form').addEventListener("submit", function (){
event.preventDefault();

let price = document.getElementById('amount').value;
let discount = document.getElementById('discount').value;

// Stap 3: Toon een foutmelding in #result als het bedrag of de korting leeg is

if( price === '', discount === ''){
    document.querySelector('#result').textContent = 
"Error"
} else {
    document.querySelector('#result').textContent = 
calculateTotal(price, discount);
};

});

// Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij
function getKlantniveau(bedrag){
    console.log(getKlantniveau(bedrag))
};