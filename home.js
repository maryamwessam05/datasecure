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


let statsCards = [
    {
        img: "img/1.svg",
        value: "73%",
        text: "of users have experienced online fraud attempts"
    },
    {
        img: "img/2.svg",
        value: "2.5M",
        text: "bank card details stolen annually worldwide"
    },
    {
        img: "img/3.svg",
        value: "89%",
        text: "of scams start with personal information sharing"
    }
];

let section = document.querySelector(".sec2");


for (let i = 0; i < statsCards.length; i++) {
    section.innerHTML += `
        <div class="card">
            <img src="${statsCards[i].img}" alt="">
            <h4>${statsCards[i].value}</h4>
            <p>${statsCards[i].text}</p>
        </div>
    `;
}