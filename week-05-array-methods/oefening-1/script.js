const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

// Filter: toon alleen scores boven de 50 in #result-filtered
document.querySelector("#result-filtered").textContent = scores.filter(scores => scores > 50)
// Map: verdubbel alle scores en toon in #result-map
document.querySelector("#result-map").textContent = scores.map(scores => scores * 2)
// Sort: sorteer van laag naar hoog en toon in #result-sorted
document.querySelector("#result-sorted").textContent = scores.sort((a, b) => a - b)
