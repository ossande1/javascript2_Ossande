// Fout gevonden: Er was geen komma in het json array, Index had geen js verbinding, ./users.json mist het json deel en appendChild was met list en niet li
// Oplossing: kommas in het array schrijven, js verbinding maken, ./users.json compleet schrijven en appendchild fixen met li 

fetch('./users.json')
  .then(r => r.json())
  .then(users => {
    const list = document.querySelector('#results');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
