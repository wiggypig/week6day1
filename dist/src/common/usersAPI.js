const ENDPOINT = "https://jsonplaceholder.typicode.com/users/";
import { getUsers } from "./common/usersAPI";

// export function getUsers() {
//   return fetch(ENDPOINT)
//     .then(response => {
//       if (!response.ok) throw Error(response.statusText);
//       return response.json();
//     })
//     .then(json => json);
// }

// ----
const getUserModule = () =>
  import(/* webpackChunkName: "usersAPI" */ "./common/usersAPI");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then(json => console.log(json));
  });
});