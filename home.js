let nav = [
    {
        title : "Home",
        link: "index.html"
    },
    {
        title : "Gallery",
        link: "#about"
    },
    {
        title : "Profile",
        link: "#cast"
    },
    {
        title : "Login",
        link: "#merchsec"
    },
]

let navbar = document.querySelector(".navbar");

for (let i = 0; i < nav.length; i++) {

    navbar.innerHTML += `
        <li>
            <a href="${nav[i].link}" class="${i === 0 ? 'selectednav' : ''}">
                ${nav[i].title}
            </a>
        </li>
    `;
}


let herotxt = document.querySelector(".herotxt")

herotxt.innerHTML +=`
    <h1>Protect Your Data. <br>Secure Your Future. </h1>
    <p>Learn how to safeguard your bank card and personal information from online scams. Your security starts with awareness.</p>
    <button>Learn How to Stay Safe</button>

`