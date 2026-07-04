// =====================================================
// RHONA Academy
// Premium JavaScript v1.0
// =====================================================

// Navbar Scroll Effect

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// AOS

if(typeof AOS!=="undefined"){

AOS.init({

duration:900,

once:true,

offset:120

});

}

// Product Card Hover

document.querySelectorAll(".product-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// Success Card Hover

document.querySelectorAll(".success-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// Review Slider

const reviewSlider=document.querySelector("#reviewSlider");

if(reviewSlider){

new bootstrap.Carousel(reviewSlider,{

interval:3500,

ride:"carousel",

pause:false,

wrap:true,

touch:true

});

}

// Reveal Animation

const cards=document.querySelectorAll(".card,.product-card,.success-card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".8s";

observer.observe(card);

});

// Hero Animation

const hero=document.querySelector(".hero h1");

if(hero){

hero.animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0px)"

}

],{

duration:1200,

fill:"forwards"

});

}

// Premium Badge Animation

const badge=document.querySelector(".premium-badge");

if(badge){

setInterval(()=>{

badge.style.transform="scale(1.04)";

setTimeout(()=>{

badge.style.transform="scale(1)";

},400);

},2500);

}

// Sticky Button Pulse

const sticky=document.querySelector(".sticky-buy");

if(sticky){

setInterval(()=>{

sticky.style.transform="scale(1.02)";

setTimeout(()=>{

sticky.style.transform="scale(1)";

},500);

},2000);

}

// Floating WhatsApp Pulse

const whatsapp=document.querySelector(".whatsapp-float");

if(whatsapp){

setInterval(()=>{

whatsapp.style.transform="scale(1.1)";

setTimeout(()=>{

whatsapp.style.transform="scale(1)";

},400);

},2500);

}

// Floating Call Pulse

const call=document.querySelector(".call-float");

if(call){

setInterval(()=>{

call.style.transform="scale(1.08)";

setTimeout(()=>{

call.style.transform="scale(1)";

},400);

},3000);

}

// Auto Close Navbar

const navLinks=document.querySelectorAll(".navbar-collapse .nav-link");

const navCollapse=document.querySelector(".navbar-collapse");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

if(window.innerWidth<992){

new bootstrap.Collapse(navCollapse).hide();

}

});

});

// Current Year

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

// Loading Animation

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// Disable Right Click

document.addEventListener("contextmenu",e=>{

e.preventDefault();

});

// Disable Image Drag

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

// Console Message

console.log("RHONA Academy Premium Landing Page Loaded Successfully");
