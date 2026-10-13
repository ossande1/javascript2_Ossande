const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];

const userContainer = document.querySelector('#users')

let filter = 'all';

const showUsers = (users) => {
  // Gebruik destructuring voor elke user: const { name, email } = users

  userContainer.innerHTML = ''
  let user = "";
  for (const { name, email,  } of users) {
    user += "<br>" + name + " is " + email + "<br>";
  }
  // Toon elke user als een <article> in #users
  const show = document.createElement("article")
  show.innerHTML = user
  userContainer.appendChild(show)
};

const filterUsers = () => {
  // const role = document.querySelector("#role")
  // Als filter 'admin' is, toon alleen gebruikers met role === 'admin'
 
  if(filter === 'admin'){
  const admin =  users.filter(user => user.role === 'admin')
    showUsers(admin)
  } else{
    showUsers(users)
  }
  // Anders toon je alle gebruikers
  // Roep showUsers() aan met de gefilterde lijst
};

// Maak een eventlistener voor de #filter-admin button
document.querySelector("#filter-admin").addEventListener("click", ()=>{
  filter = 'admin'
  filterUsers()
})
// Zet filter op 'admin' en roep filterUsers() aan

// Maak een eventlistener voor de #filter-all button
document.querySelector("#filter-all").addEventListener("click", ()=>{
  filter = 'all'
  filterUsers()
})
// Zet filter op 'all' en roep filterUsers() aan

// Maak een eventlistener voor het #user-form submit event
document.querySelector("#user-form").addEventListener("submit", ()=>{
  event.preventDefault()

  let name = document.querySelector("#name").value
  let email = document.querySelector("#email").value
  let role = document.querySelector("#role").value

  users.push({name, email, role})

  filterUsers(users)
})
// Lees naam, email en role uit de invoervelden
// Maak een nieuw user object aan met spread op een default object
// Voeg toe aan de array en roep filterUsers() aan

filterUsers();
