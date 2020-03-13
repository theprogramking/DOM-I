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
    "h1": "DOM Is Awesome",
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
newlink.innerHTML = "Yeet";
nav.prepend(newlink);

let secondnewlink = document.createElement("a");
secondnewlink.innerHTML = "Skeet";
nav.appendChild(secondnewlink);

// First Section
let cta = document.querySelector(".cta-text");
let header = cta.querySelector("h1");
let button = cta.querySelector("button");
header.innerHTML = siteContent["cta"]["h1"];
button.innerHTML = siteContent["cta"]["button"];

// Features
let content = document.querySelector(".text-content");
let h4 = content.querySelector("h4");
let para = content.querySelector("p");
h4.innerHTML = siteContent["main-content"]["features-h4"];
para.innerHTML = siteContent["main-content"]["features-content"]; 

// About
let about = document.querySelector(".text-content:nth-child(2)");
let aboutHeader = about.querySelector("h4");
let aboutPara = about.querySelector("p");
aboutHeader.innerHTML = siteContent["main-content"]["about-h4"];
aboutPara.innerHTML = siteContent["main-content"]["about-content"]; 

// Services
let services = document.querySelector(".text-content:nth-child(3)");
let servicesHeader = services.querySelector("h4");
let servicesPara = services.querySelector("p");
servicesHeader.innerHTML = siteContent["main-content"]["services-h4"];
servicesPara.innerHTML = siteContent["main-content"]["services-content"]; 

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
let copyright = footer.querySelector("p");
copyright.innerHTML = siteContent["footer"]["copyright"];