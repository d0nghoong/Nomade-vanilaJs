const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN);
  console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  console.log(savedUsername);

  if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN);
  } else {
    greeting.classList.remove(HIDDEN);
    greeting.innerText = `Hello ${username}`;
  }
}

loginForm.addEventListener("submit", onLoginSubmit);
