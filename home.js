
// TOGGLE MODE DARK AND LIGHT


document.querySelector(".mode").addEventListener("click" , ()  => {
    document.body.classList.toggle("lightmode")
})



// SCROLL TO TOP FUNCTION
  let upbtn = document.querySelector(".upbtn");

  upbtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });



//   PRELOADER
  let pretxt = document.getElementById("preloadertext");
  pretxt.innerHTML += `SecureAware`

window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.transform = "scale(0)";
    }, 3000);
  });


//   NAVBAR

  document.getElementById("")
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


// HERO SECTION

let herotxt = document.querySelector(".herotxt")

herotxt.innerHTML +=`
    <h1>Protect Your Data. <br>Secure Your Future. </h1>
    <p>Learn how to safeguard your bank card and personal information from online scams. Your security starts with awareness.</p>
    <button>Learn How to Stay Safe</button>

`


// STATS CARDS ARRAY

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


// SECTION 3 AND TIPS

let sec3tit = document.getElementById("sec3title");

sec3tit.innerHTML += `Essential Security Facts`

let tipsCards = [
    {
        number: "1",
        title: "Never Share Your CVV",
        text: "Your bank will never ask for your card security code via email, text, or phone. Keep this information completely private."
    },
    {
        number: "2",
        title: "Verify Before Clicking",
        text: "Always check the sender's email address and hover over links before clicking. Scammers often use similar-looking domains."
    },
    {
        number: "3",
        title: "Use Strong Passwords",
        text: "Create unique passwords for each account, combining letters, numbers, and symbols. Never reuse passwords across sites."
    }
];



let cardsContainer = document.querySelector(".cards2");


for (let i = 0; i < tipsCards.length; i++) {
    cardsContainer.innerHTML += `
        <div class="cardsec3">
            <h6>${tipsCards[i].number}</h6>
            <h3>${tipsCards[i].title}</h3>
            <p>${tipsCards[i].text}</p>
        </div>
    `;
}


// SEC4 TEXT

let partext = document.querySelector(".text");

partext.innerHTML += `
Visual resources and educational materials to help you understand cybersecurity threats and how to protect yourself online. These materials break down complex security concepts into simple, easy-to-understand visuals, making it easier to recognize common scams, data breaches, and online risks. By learning how cyber threats work, users can make safer decisions, protect their personal information, and navigate the digital world with greater confidence.
`
let sec4tit = document.querySelector(".sec4tit");

sec4tit.innerHTML += `
Security Awareness Gallery
`


// READ MORE OR LESS FUNCTION

let readmore = document.querySelector(".readmore");

readmore.innerHTML += `
Read More
`

function toggleReadMore() {
    const text = document.querySelector(".text");
    const btn = document.querySelector(".readmore");

    text.classList.toggle("expanded");

    if (text.classList.contains("expanded")) {
        btn.textContent = "Read Less";
    } else {
        btn.textContent = "Read More";
    }
}


// GALLERY FUNCTION

let galleryItems = [
    { 
        img: "img/image 2.png", 
        title: "Digital Protection" },
    { 
        img: "img/image 3.png", 
        title: "Security Awareness" },
    { 
        img: "img/image 4.png", 
        title: "Privacy Protection" },
    { 
        img: "img/image 5.png", 
        title: "Digital Safety" },
    { 
        img: "img/image 6.png", 
        title: "Secure Banking" },
    { 
        img: "img/image 7.png",
        title: "Fraud Prevention" }
];

let gallery = document.querySelector(".gallery");
let lightbox = document.querySelector(".lightbox");
let lightboxImg = document.querySelector(".lightbox-img");
let closeBtn = document.querySelector(".close");

gallery.innerHTML = "";
for (let i = 0; i < galleryItems.length; i++) {
    gallery.innerHTML += `
        <div class="gall">
            <img src="${galleryItems[i].img}" alt="${galleryItems[i].title}">
            <h3>${galleryItems[i].title}</h3>
        </div>
    `;
}

document.querySelectorAll(".gallery .gall img").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.remove("hidden");
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.add("hidden");
});



// CONTACT US TEXT

let contit = document.querySelector(".contit")

contit.innerHTML += `Contact Us`;

let conp = document.querySelector(".conp")

conp.innerHTML += `Have questions about online security? We're here to help.`