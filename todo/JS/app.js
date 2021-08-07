//main.login
const loginForm = document.querySelector(".login_form");
const loginInput = document.querySelector(".login_form input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const storageUsername = localStorage.getItem("username");

//main.login
//if submit login stop prevent, hide login form, remember username in localstorage and say hello.
function onSubmitLogin(event){
    event.preventDefault();
    const username = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);
    sayHello(username);
}

//say hello to user, don`t hide greeting.
function sayHello(username){
    greeting.innerText = `Hello, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//when enter here, if we remember user`s name, say hello or remember the user`s name.
function inIt(){
    if (storageUsername === null){
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onSubmitLogin);
    }
    else {
        sayHello(storageUsername);
    }
}

inIt();