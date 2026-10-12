const car = {
  name: 'Golf',
  brand: 'Volkswagen',
  year: 2008,
  mileage: 145000,
  description() {
  return`Ik ben ${this.name} en mijn brand is ${this.brand}`// Vul in: geef een zin terug met this.name en this.brand via template literal
  },
  isOld() {
    if(car.year === 2010){
    return true// Vul in: geef true terug als het year voor 2010 is
    } else {
    return false
    }
  },
  drive(km) {
    return this.mileage * 1.609344// Vul in: verhoog this.mileage met km en geef de nieuwe km-stand terug
  },
};

// Toon de resultaten in de drie output-elementen
document.getElementById("output-1").textContent = car.description()
document.getElementById("output-2").textContent = car.isOld()
document.getElementById("output-3").textContent = car.drive() + "km"