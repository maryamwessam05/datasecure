// LOCALIZATION TEXTS
const texts = {
  en: {
    nav: [
      { title: "Home", link: "index.html" },
      { title: "Gallery", link: "#gallery" },
      { title: "Profile", link: "profile.html" },
      { title: "Login", link: "login.html" }
    ],
    heroTitle: "Protect Your Data. <br>Secure Your Future.",
    heroDesc: "Learn how to safeguard your bank card and personal information from online scams. Your security starts with awareness.",
    heroBtn: "Learn How to Stay Safe",
    sec3Title: "Essential Security Facts",
    sec4Title: "Security Awareness Gallery",
    sec4Text: "Explore our comprehensive collection of security awareness materials, infographics, and educational resources designed to help you identify and prevent online scams. Each image contains valuable information about protecting your personal and financial data in the digital age.",
    readMore: "Read More",
    readLess: "Read Less",
    contactTitle: "Contact Us",
    contactDesc: "Have questions about online security? We're here to help.",
    contactName: "Name",
    contactEmail: "Email",
    contactMessage: "Message",
    contactSubmit: "Submit",
    contactSent: "Sent",
    footerText: "© 2024 SecureAware Campaign. All rights reserved. <br> Protecting your data, one step at a time.",
    alertFillFields: "Please fill in all fields.",
    alertValidEmail: "Please enter a valid email.",

    statsCards: [
      { img: "img/1.svg", value: "73%", text: "of users have experienced online fraud attempts" },
      { img: "img/2.svg", value: "2.5M", text: "bank card details stolen annually worldwide" },
      { img: "img/3.svg", value: "89%", text: "of scams start with personal information sharing" }
    ],
    tipsCards: [
      { number: "1", title: "Never Share Your CVV", text: "Your bank will never ask for your card security code via email, text, or phone." },
      { number: "2", title: "Verify Before Clicking", text: "Always check the sender's email address and hover over links before clicking." },
      { number: "3", title: "Use Strong Passwords", text: "Create unique passwords for each account. Never reuse passwords across sites." }
    ]
  },
  ar: {
    nav: [
      { title: "الرئيسية", link: "index.html" },
      { title: "المعرض", link: "#gallery" },
      { title: "الملف الشخصي", link: "profile.html" },
      { title: "تسجيل الدخول", link: "login.html" }
    ],
    heroTitle: "احمِ بياناتك. <br>أمّن مستقبلك.",
    heroDesc: "تعلم كيفية حماية بطاقتك البنكية ومعلوماتك الشخصية من الاحتيالات الإلكترونية. يبدأ الأمان بالوعي.",
    heroBtn: "تعلم كيف تبقى آمناً",
    sec3Title: "حقائق أساسية حول الأمن",
    sec4Title: "معرض التوعية الأمنية",
    sec4Text: "استكشف مجموعتنا الشاملة من مواد التوعية الأمنية والرسوم البيانية والموارد التعليمية المصممة لمساعدتك في تحديد ومنع عمليات الاحتيال عبر الإنترنت. تحتوي كل صورة على معلومات قيمة حول حماية بياناتك الشخصية والمالية في العصر الرقمي.",
    readMore: "اقرأ المزيد",
    readLess: "اقرأ أقل",
    contactTitle: "اتصل بنا",
    contactDesc: "هل لديك أسئلة حول الأمان عبر الإنترنت؟ نحن هنا للمساعدة.",
    contactName: "الاسم",
    contactEmail: "البريد الإلكتروني",
    contactMessage: "الرسالة",
    contactSubmit: "إرسال",
    contactSent: "تم الإرسال",
    footerText: "© 2024 حملة SecureAware. جميع الحقوق محفوظة. <br> حماية بياناتك، خطوة بخطوة.",
    alertFillFields: "يرجى ملء جميع الحقول.",
    alertValidEmail: "يرجى إدخال بريد إلكتروني صالح.",

    statsCards: [
      { img: "img/1.svg", value: "73%", text: "تعرض المستخدمون لمحاولات احتيال عبر الإنترنت" },
      { img: "img/2.svg", value: "2.5M", text: "سرقة تفاصيل البطاقات المصرفية سنويًا حول العالم" },
      { img: "img/3.svg", value: "89%", text: "تبدأ معظم عمليات الاحتيال بمشاركة المعلومات الشخصية" }
    ],
    tipsCards: [
      { number: "1", title: "لا تشارك رقم CVV", text: "لن يطلب البنك منك رمز أمان البطاقة عبر البريد أو الرسائل أو الهاتف." },
      { number: "2", title: "تحقق قبل النقر", text: "تحقق دائمًا من بريد المرسل وحوم على الروابط قبل النقر." },
      { number: "3", title: "استخدم كلمات مرور قوية", text: "أنشئ كلمات مرور فريدة لكل حساب. لا تعيد استخدام كلمات المرور." }
    ]
  }
};

let currentLang = "en";


function updateTexts() {
  const t = texts[currentLang];

  // HERO
  const heroTitle = document.querySelector(".herotxt h1");
  const heroDesc = document.querySelector(".herotxt p");
  const heroBtn = document.querySelector(".herotxt button");
  
  if (heroTitle) heroTitle.innerHTML = t.heroTitle;
  if (heroDesc) heroDesc.textContent = t.heroDesc;
  if (heroBtn) heroBtn.textContent = t.heroBtn;

  // SECTION 3
  const sec3Title = document.getElementById("sec3title");
  if (sec3Title) sec3Title.textContent = t.sec3Title;

  // SECTION 4
  const sec4Title = document.querySelector(".sec4tit");
  const sec4Text = document.querySelector(".text");
  const readMoreBtn = document.querySelector(".readmore");
  
  if (sec4Title) sec4Title.textContent = t.sec4Title;
  if (sec4Text) sec4Text.textContent = t.sec4Text;
  if (readMoreBtn) {
    readMoreBtn.textContent = sec4Text && sec4Text.classList.contains("expanded") ? t.readLess : t.readMore;
  }

  // CONTACT
  const contactTitle = document.querySelector(".contit");
  const contactDesc = document.querySelector(".conp");
  const nameLabel = document.getElementById("namelabel");
  const emailLabel = document.getElementById("emaillabel");
  const messageLabel = document.getElementById("messagelabel");
  const submitBtn = document.getElementById("submit");
  
  if (contactTitle) contactTitle.textContent = t.contactTitle;
  if (contactDesc) contactDesc.textContent = t.contactDesc;
  if (nameLabel) nameLabel.textContent = t.contactName;
  if (emailLabel) emailLabel.textContent = t.contactEmail;
  if (messageLabel) messageLabel.textContent = t.contactMessage;
  if (submitBtn && submitBtn.textContent !== t.contactSent) {
    submitBtn.textContent = t.contactSubmit;
  }

  // FOOTER
  const footerTxt = document.querySelector(".footertxt");
  if (footerTxt) footerTxt.innerHTML = t.footerText;

  // RTL or LTR
  document.body.style.direction = currentLang === "ar" ? "rtl" : "ltr";
}

function renderNavbar() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;
  
  navbar.innerHTML = "";
  texts[currentLang].nav.forEach((item, i) => {
    navbar.innerHTML += `
      <li>
        <a href="${item.link}" class="${i === 0 ? 'selectednav' : ''}">${item.title}</a>
      </li>
    `;
  });
}

function renderStatsAndTips() {
  // Stats
  const section = document.querySelector(".sec2");
  if (section) {
    section.innerHTML = "";
    texts[currentLang].statsCards.forEach(card => {
      section.innerHTML += `
        <div class="card">
          <img src="${card.img}" alt="">
          <h4>${card.value}</h4>
          <p>${card.text}</p>
        </div>
      `;
    });
  }

  // Tips
  const cardsContainer = document.querySelector(".cards2");
  if (cardsContainer) {
    cardsContainer.innerHTML = "";
    texts[currentLang].tipsCards.forEach(tip => {
      cardsContainer.innerHTML += `
        <div class="cardsec3">
          <h6>${tip.number}</h6>
          <h3>${tip.title}</h3>
          <p>${tip.text}</p>
        </div>
      `;
    });
  }
}

// DARK/LIGHT MODE TOGGLE

const modeBtn = document.querySelector(".mode");
if (modeBtn) {
  modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("lightmode");
  });
}

// SCROLL TO TOP

const upbtn = document.querySelector(".upbtn");
if (upbtn) {
  upbtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// PRELOADER

const pretxt = document.getElementById("preloadertext");
if (pretxt) pretxt.textContent = "SecureAware";

window.addEventListener("load", () => {
  setTimeout(() => {
    const pre = document.getElementById("preloader");
    if (pre) {
      pre.style.opacity = "0";
      pre.style.transform = "scale(0)";
      pre.style.pointerEvents = "none";
    }
  }, 2000);
});

// HERO RANDOM IMAGE

const heroImages = ["img/Container.png", "img/Container2.png", "img/Container3.png", "img/Container4.png"];
const heroImage = document.getElementById("heroImage");
if (heroImage) {
  heroImage.src = heroImages[Math.floor(Math.random() * heroImages.length)];
}

// READ MORE / LESS

function toggleReadMore() {
  const text = document.querySelector(".text");
  const btn = document.querySelector(".readmore");
  if (!text || !btn) return;
  
  text.classList.toggle("expanded");
  const t = texts[currentLang];
  btn.textContent = text.classList.contains("expanded") ? t.readLess : t.readMore;
}

const readMoreBtn = document.querySelector(".readmore");
if (readMoreBtn) {
  readMoreBtn.addEventListener("click", toggleReadMore);
}


// CONTACT FORM

const form = document.querySelector(".sec5 form");
const nameInput = document.querySelector(".contactinput1");
const emailInput = document.querySelector(".contactinput2");
const messageInput = document.querySelector(".contactinputtxt");
const submitBtn = document.getElementById("submit");

function validateForm() {
  const t = texts[currentLang];
  
  if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
    alert(t.alertFillFields);
    return false;
  }
  
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    alert(t.alertValidEmail);
    return false;
  }
  
  return true;
}

function saveFormData() {
  const formData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };
  
  let allMessages = JSON.parse(localStorage.getItem("messages")) || [];
  allMessages.push(formData);
  localStorage.setItem("messages", JSON.stringify(allMessages));
}

function showSuccessSendMsg() {
  const t = texts[currentLang];
  if (submitBtn) {
    submitBtn.textContent = t.contactSent;
    submitBtn.style.backgroundColor = "#202020";
    submitBtn.style.color = "#FFF";
  }
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
      saveFormData();
      showSuccessSendMsg();
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }
  });
}


// GALLERY / LIGHTBOX

const galleryItems = [
  { img: "img/image 2.png" },
  { img: "img/image 3.png" },
  { img: "img/image 4.png" },
  { img: "img/image 5.png" },
  { img: "img/image 6.png" },
  { img: "img/image 7.png" }
];

const gallery = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

function renderGallery() {
  if (!gallery) return;
  
  gallery.innerHTML = "";
  galleryItems.forEach(item => {
    gallery.innerHTML += `
      <div class="gall">
        <img src="${item.img}" alt="">
      </div>
    `;
  });

  document.querySelectorAll(".gallery .gall img").forEach(img => {
    img.addEventListener("click", () => {
      if (lightboxImg && lightbox) {
        lightboxImg.src = img.src;
        lightbox.classList.remove("hidden");
      }
    });
  });
}

renderGallery();

if (closeBtn && lightbox) {
  closeBtn.addEventListener("click", () => lightbox.classList.add("hidden"));
}

// LANGUAGE TOGGLE

const langBtn = document.querySelector(".lang");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    langBtn.textContent = currentLang.toUpperCase();
    updateTexts();
    renderStatsAndTips();
    renderNavbar();
  });
}


// INITIAL RENDER

updateTexts();
renderStatsAndTips();
renderNavbar();