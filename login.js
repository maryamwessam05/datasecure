let loginwelcome = document.getElementById("loginwelcome")
loginwelcome.innerHTML += `Welcome Back`

let logindeets = document.getElementById("logdeets")
logindeets.innerHTML += `Sign in to access your security dashboard`

let usertext = document.getElementById("usertxt")
usertext.innerHTML += `Username`

let passtxt = document.getElementById("passtxt")
passtxt.innerHTML += `Password`

let loginbtn = document.getElementById("loginbtn")
loginbtn.innerHTML += `Login`

let forgot = document.getElementById("forgot")
forgot.innerHTML += `Forgot your password?`

let footertxt = document.querySelector(".footertxt")
footertxt.innerHTML += `© 2024 SecureAware Campaign. All rights reserved. <br> Protecting your data, one step at a time.`


let users = [
    { username: "Ahmed", password: "ahmed2005" },
    { username: "Laila", password: "laila2002" }
];

let loginBtn = document.getElementById("loginBtn");
let loginError = document.getElementById("loginError");


function login() {
    let userNameInput = document.getElementById("username").value.trim();
    let passNameInput = document.getElementById("password").value.trim();

    let validUser = users.find(user => user.username === userNameInput && user.password === passNameInput);

    if(validUser){

        localStorage.setItem("loggedInUser", JSON.stringify(validUser));

        window.location.href = "index.html";
    } else {
        loginError.style.display = "block";
        loginError.textContent = "Login failed";
    }
};