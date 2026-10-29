let allArticles = [];

const showArticles = (articles) => {
  // Zet elk artikel om naar een <article> met map() en toon het in #articles
  // Toon de title, category en summary van elk artikel

  for(let article of articles){
      document.querySelector("#articles").innerHTML = articles.map(article => `
      <article>
        <span>${article.category}</span>  
        <h2> ${article.title}</h2> 
        <p> ${article.summary}</p>
      </article>
    `
  ).join("")
};
}

fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
    allArticles = articles
    // Sla de artikelen op in allArticles
    // Roep showArticles() aan met allArticles

    showArticles(allArticles)

    })

  .catch(error => console.error('Fout bij laden:', error));

// Maak een eventlistener voor de #filter-alle button
// Roep showArticles() aan met allArticles
document.querySelector("#filter-alle").addEventListener("click", ()=>{
  
  showArticles(allArticles)
})

// Maak een eventlistener voor de #filter-stad button
// Filter allArticles op category 'Stad' en roep showArticles() aan
document.querySelector("#filter-stad").addEventListener("click", ()=>{


  showArticles(allArticles.filter(article => article.category === 'Stad'))
})

// Maak een eventlistener voor de #filter-technologie button
// Filter allArticles op category 'Technologie' en roep showArticles() aan
document.querySelector("#filter-technologie").addEventListener("click", ()=>{
  
  showArticles(allArticles.filter(article => article.category === 'Technologie'))


})

// Maak een eventlistener voor de #filter-media button
// Filter allArticles op category 'Media' en roep showArticles() aan
document.querySelector("#filter-media").addEventListener("click", ()=>{
 
  showArticles(allArticles.filter(article => article.category === 'Media'))

})
