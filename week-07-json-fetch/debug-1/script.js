// Fout gevonden: fetch('./new.json') het naam het het .json file was fout geschreven. Het mist een "s"
// Oplossing: fetch('./news.json')

fetch('./news.json')
  .then(r => r.json())
  .then(messages => {
    const list = document.querySelector('#results');
    messages.forEach(message => {
      const li = document.createElement('li');
      li.textContent = message.title;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
