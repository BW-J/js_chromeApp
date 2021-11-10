const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubbmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    // show the greeting
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username} !!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubbmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
}