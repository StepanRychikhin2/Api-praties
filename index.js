// https://api.github.com/users

// Отримати список користувачів з GitHub API Опис:
// Використайте публічне API GitHub для отримання списку користувачів.Зробіть GET - запит
// за адресою https://api.github.com/users та перегляньте отримані дані щодо користувачів.

const listUser = document.querySelector(".users")
const URL = "https://api.github.com/users"

function fetchUsers(url) {
    
const data = fetch(url)
return data;
}

fetchUsers(URL).then((data) => data.json()).then((data) => createUserMapArt(data)).catch((error) => console.log(error))


function createUserMapArt(data) {
 const listMarkUp = data.map((user) => {
   const listElem = `
   <li >
   <img src="${user.avatar_url}" alt="${user.type}">
   <p class="login">${user.login}</p>
   <p class="url">${user.url}</p>
   </li>`;
return listElem;
  })
  listUser.innerHTML = listMarkUp;
   
}