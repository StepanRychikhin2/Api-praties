// // https://api.github.com/users

// // Отримати список користувачів з GitHub API Опис:
// // Використайте публічне API GitHub для отримання списку користувачів.Зробіть GET - запит
// // за адресою https://api.github.com/users та перегляньте отримані дані щодо користувачів.

// const listUser = document.querySelector(".users")
// const URL = "https://restcountries.com/v3.1/name/{name}?fullText=true"

// function fetchUsers(url) {
    
// const data = fetch(url)
// console.log(data)
// return data;
// }

// fetchUsers(URL).then((data) => data.json()).then((data) => createUserMapArt(data)).catch((error) => console.log(error))


// function createUserMapArt(data) {
//  const listMarkUp = data.map((user) => {
//    const listElem = `
//    <li >
//    <img src="${user.avatar_url}" alt="${user.type}">
//    <p class="login">${user.login}</p>
//    <p class="url">${user.url}</p>
//    </li>`;
// return listElem;
//   })
//   listUser.innerHTML = listMarkUp;
   
  
// }



// Отримати погоду за допомогою OpenWeatherMap API Опис:
// Використайте публічне API OpenWeatherMap для отримання поточної погоди.
// Зробіть GET - запит за адресою https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY},
// де { city } - назва міста, а { API_KEY } - ваш ключ API OpenWeatherMap.
// Перегляньте отримані дані щодо погоди.

// const input = document.querySelector(".input")
// const api = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}"
// const city = input.value


// let searchBtn = document.getElementById("search-btn");
// let countryInp = document.getElementById("country-inp");

// searchBtn.addEventListener("click", () => {
//   let countryName = countryInp.value;
//   let finalURL = `https://restcountries.com/v3.1/name/${countryName}`;
//   console.log(finalURL);
//   fetch(finalURL)
//     .then((response) => response.json())
//     .then((data) => {

//       result.innerHTML = `
//         <img src="${data[0].flags.svg}" class="flag-img">
//         <h2>${data[0].name.common}</h2>
//         <div class="wrapper">
//             <div class="data-wrapper">
//                 <h4>Capital:</h4>
//                 <span>${data[0].capital[0]}</span>
//             </div>
//         </div>
//         <div class="wrapper">
//             <div class="data-wrapper">
//                 <h4>Continent:</h4>
//                 <span>${data[0].continents[0]}</span>
//             </div>
//         </div>
//          <div class="wrapper">
//             <div class="data-wrapper">
//                 <h4>Population:</h4>
//                 <span>${data[0].population}</span>
//             </div>
//         </div>
//         <div class="wrapper">
//             <div class="data-wrapper">
//                 <h4>Currency:</h4>
//                 <span>${
//                   data[0].currencies[Object.keys(data[0].currencies)].name
//                 } - ${Object.keys(data[0].currencies)[0]}</span>
//             </div>
//         </div>
//          <div class="wrapper">
//             <div class="data-wrapper">
//                 <h4>Common Languages:</h4>
//                 <span>${Object.values(data[0].languages)
//                   .toString()
//                   .split(",")
//                   .join(", ")}</span>
//             </div>
//         </div>
//       `;
//     })
//     .catch(() => {
//       if (countryName.length == 0) {
//         result.innerHTML = `<h3>The input field cannot be empty</h3>`;
//       } else {
//         result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
//       }
//     });
// });

const list = document.querySelector(".list")
fetch("http://localhost:3000/productsa")
.then((res) => res.json())
.then((data) => {
   const listMarkUp = data.map((user) => {
   const listElem = `
   <li >
   <p class="login">name:${user.name}</p>
   <p class="login">prise:${user.prise}</p>
   <p class="url">id:${user.id}</p>
   </li>`;
return listElem;
  })
  list.innerHTML = listMarkUp;
   
  
})




