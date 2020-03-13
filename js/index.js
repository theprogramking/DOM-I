const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br/> Is <br/> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Middle Image 
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Code Image
let codeImage = document.getElementById("cta-img");
codeImage.setAttribute('src', siteContent["cta"]["img-src"])

// Navigation 
let nav = document.querySelector("nav");
let links = nav.querySelectorAll("a");
links[0].innerHTML = siteContent["nav"]["nav-item-1"];
links[1].innerHTML = siteContent["nav"]["nav-item-2"];
links[2].innerHTML = siteContent["nav"]["nav-item-3"];
links[3].innerHTML = siteContent["nav"]["nav-item-4"];
links[4].innerHTML = siteContent["nav"]["nav-item-5"];

let newlink = document.createElement("a");
newlink.innerHTML = "Login";
nav.prepend(newlink);

let secondnewlink = document.createElement("a");
secondnewlink.innerHTML = "Contact";
nav.appendChild(secondnewlink);

// First Section
let cta = document.querySelector(".cta-text");
let header = cta.querySelector("h1");
let button = cta.querySelector("button");
header.innerHTML = siteContent["cta"]["h1"];
button.innerHTML = siteContent["cta"]["button"];

// Features
let content = document.querySelectorAll(".text-content");
content[0].querySelector("h4").innerHTML = siteContent["main-content"]["features-h4"];
content[1].querySelector("h4").innerHTML = siteContent["main-content"]["about-h4"];
content[2].querySelector("h4").innerHTML = siteContent["main-content"]["services-h4"];
content[3].querySelector("h4").innerHTML = siteContent["main-content"]["product-h4"];
content[4].querySelector("h4").innerHTML = siteContent["main-content"]["vision-h4"];
content[0].querySelector("p").innerHTML = siteContent["main-content"]["features-content"];
content[1].querySelector("p").innerHTML = siteContent["main-content"]["about-content"];
content[2].querySelector("p").innerHTML = siteContent["main-content"]["services-content"];
content[3].querySelector("p").innerHTML = siteContent["main-content"]["product-content"];
content[4].querySelector("p").innerHTML = siteContent["main-content"]["vision-content"];

// Contact
let contact = document.querySelector(".contact");
let contactHeader = contact.querySelector("h4");
let contactInfo = contact.querySelectorAll("p");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];
contactInfo[0].innerHTML = siteContent["contact"]["address"];
contactInfo[1].innerHTML = siteContent["contact"]["email"];
contactInfo[2].innerHTML = siteContent["contact"]["phone"];

// Footer
let footer = document.querySelector("footer");
console.log(footer);
let copyright = footer.querySelector("p");
copyright.innerHTML = siteContent["footer"]["copyright"];