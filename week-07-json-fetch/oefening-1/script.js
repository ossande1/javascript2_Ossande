let output = document.getElementById('books-list');
let out = '';

fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    // Toon elk boek als een <li> in #books-list

    for (let book of books){
      out += `
      <li>
      title:  ${book.title}, author: ${book.author}, year: ${book.year}
      </li>
      `
    }

    output.innerHTML = out
  })
  .catch(error => console.error('Fout:', error));
