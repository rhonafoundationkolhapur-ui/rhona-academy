/* ==========================================================
RHONA Academy
Premium Landing Page JavaScript
========================================================== */

"use strict";

/* ==========================================================
DOM READY
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

initializeNavbar();

initializeSmoothScroll();

initializeCounters();

initializeAnimations();

initializeProductCards();

initializeStickyButton();

initializeReviewSlider();

initializeOfferBar();

initializeFloatingButtons();

initializeCurrentYear();

initializeFAQ();

initializeHero();

});

/* ==========================================================
WINDOW LOAD
========================================================== */

window.addEventListener("load", () => {

if(typeof AOS !== "undefined"){

AOS.init({

duration:900,

once:true,

offset:120

});

}

});

/* ==========================================================
NAVBAR
========================================================== */

function initializeNavbar(){

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}

});

}

/* ==========================================================
SMOOTH SCROLL
========================================================== */

function initializeSmoothScroll(){

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

const id=link.getAttribute("href");

const target=document.querySelector(id);

if(!target)return;

e.preventDefault();

window.scrollTo({

top:target.offsetTop-90,

behavior:"smooth"

});

});

});

}

/* ==========================================================
HERO
========================================================== */

function initializeHero(){

const title=document.querySelector(".hero h1");

if(!title)return;

title.animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards"

});

}

/* ==========================================================
COUNTERS
========================================================== */

function initializeCounters(){

const counters=document.querySelectorAll(".counter");

if(!counters.length)return;

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(entry.target);

observer.unobserve(entry.target);

}

});

});

counters.forEach(counter=>observer.observe(counter));

}

function animateCounter(counter){

const target=parseInt(counter.dataset.target);

let current=0;

const increment=Math.ceil(target/100);

const timer=setInterval(()=>{

current+=increment;

if(current>=target){

current=target;

clearInterval(timer);

}

counter.innerHTML=current+"+";

},20);

}

/* ==========================================================
REVEAL ANIMATION
========================================================== */

function initializeAnimations(){

const cards=document.querySelectorAll(

".feature-card,.module-card,.product-card,.success-card"

);

const observer=new IntersectionObserver((entries)=>{

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

card.style.transition=".7s";

observer.observe(card);

});

}

/* ==========================================================
PRODUCT CARD EFFECT
========================================================== */

function initializeProductCards(){

document.querySelectorAll(".product-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

}

/* ==========================================================
REVIEW SLIDER
========================================================== */

function initializeReviewSlider(){

const slider=document.querySelector("#reviewSlider");

if(!slider)return;

new bootstrap.Carousel(slider,{

interval:3000,

ride:"carousel",

pause:false,

touch:true,

wrap:true

});

}

/* ==========================================================
STICKY BUY BUTTON
========================================================== */

function initializeStickyButton(){

const sticky=document.querySelector(".sticky-buy");

if(!sticky)return;

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

sticky.style.transform="translateY(0)";

}

else{

sticky.style.transform="translateY(100%)";

}

});

}

/* ==========================================================
TOP OFFER BAR
========================================================== */

function initializeOfferBar(){

const offer=document.querySelector(".offer-bar");

if(!offer)return;

let visible=true;

setInterval(()=>{

visible=!visible;

offer.style.opacity=visible?"1":".75";

},800);

}

/* ==========================================================
FLOATING BUTTONS
========================================================== */

function initializeFloatingButtons(){

const whatsapp=document.querySelector(".whatsapp-float");

if(whatsapp){

whatsapp.addEventListener("mouseenter",()=>{

whatsapp.style.transform="scale(1.12)";

});

whatsapp.addEventListener("mouseleave",()=>{

whatsapp.style.transform="scale(1)";

});

}

const call=document.querySelector(".call-float");

if(call){

call.addEventListener("mouseenter",()=>{

call.style.transform="scale(1.12)";

});

call.addEventListener("mouseleave",()=>{

call.style.transform="scale(1)";

});

}

}

/* ==========================================================
FAQ
========================================================== */

function initializeFAQ(){

const buttons=document.querySelectorAll(".accordion-button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

button.classList.toggle("active");

});

});

}

/* ==========================================================
CURRENT YEAR
========================================================== */

function initializeCurrentYear(){

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

}

/* ==========================================================
BUTTON RIPPLE EFFECT
========================================================== */

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.style.left=(e.offsetX-diameter/2)+"px";

circle.style.top=(e.offsetY-diameter/2)+"px";

circle.classList.add("ripple");

const ripple=this.querySelector(".ripple");

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/* ==========================================================
IMAGE HOVER EFFECT
========================================================== */

document.querySelectorAll("img").forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transition=".4s";

});

});

/* ==========================================================
LAZY IMAGE FADE
========================================================== */

const lazyImages=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="scale(1)";

imageObserver.unobserve(entry.target);

}

});

});

lazyImages.forEach(image=>{

image.style.opacity="0";

image.style.transform="scale(.95)";

image.style.transition=".7s";

imageObserver.observe(image);

});

/* ==========================================================
PREMIUM HOVER EFFECTS
========================================================== */

document.querySelectorAll(".feature-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

document.querySelectorAll(".module-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

document.querySelectorAll(".success-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

/* ==========================================================
AUTO HIGHLIGHT PAYMENT BUTTONS
========================================================== */

setInterval(()=>{

document.querySelectorAll(".btn-success").forEach(button=>{

button.classList.add("shadow");

setTimeout(()=>{

button.classList.remove("shadow");

},600);

});

},4000);

/* ==========================================================
SCROLL PROGRESS BAR
========================================================== */

const progress=document.createElement("div");

progress.id="scrollProgress";

progress.style.position="fixed";

progress.style.left="0";

progress.style.top="0";

progress.style.height="4px";

progress.style.width="0%";

progress.style.background="#14B8A6";

progress.style.zIndex="999999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scroll=

(window.scrollY/

(document.body.scrollHeight-window.innerHeight))*100;

progress.style.width=scroll+"%";

});

/* ==========================================================
ACTIVE NAVIGATION
========================================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ==========================================================
PREMIUM HERO PARALLAX
========================================================== */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY=(window.scrollY*.3)+"px";

}

});

/* ==========================================================
PREMIUM NUMBER FORMAT
========================================================== */

document.querySelectorAll(".price-box h2").forEach(price=>{

price.innerHTML="₹599";

});

/* ==========================================================
PAYMENT BUTTON TRACKER
========================================================== */

document.querySelectorAll("a").forEach(link=>{

if(link.href.includes("rzp.io")){

link.addEventListener("click",()=>{

console.log("Payment Button Clicked");

});

}

});

/* ==========================================================
WHATSAPP TRACKER
========================================================== */

document.querySelectorAll("a").forEach(link=>{

if(link.href.includes("wa.me")){

link.addEventListener("click",()=>{

console.log("WhatsApp Click");

});

}

});

/* ==========================================================
KEYBOARD SHORTCUT
========================================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

/* ==========================================================
PREVENT IMAGE DRAG
========================================================== */

document.querySelectorAll("img").forEach(image=>{

image.setAttribute("draggable","false");

});

/* ==========================================================
DISABLE RIGHT CLICK ON IMAGES
========================================================== */

document.querySelectorAll("img").forEach(image=>{

image.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

});

/* ==========================================================
PRELOADER SAFETY
========================================================== */

const loader=document.getElementById("loader");

if(loader){

window.addEventListener("load",()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},500);

});

}

/* ==========================================================
COURSE ENROLL BUTTON ANIMATION
========================================================== */

document.querySelectorAll("a[href*='rzp.io']").forEach(button=>{

setInterval(()=>{

button.animate(

[

{

transform:"scale(1)"

},

{

transform:"scale(1.05)"

},

{

transform:"scale(1)"

}

],

{

duration:800

}

);

},5000);

});

/* ==========================================================
LIVE STUDENT COUNTER
========================================================== */

const studentCounter=document.getElementById("studentCount");

if(studentCounter){

let students=1287;

setInterval(()=>{

students++;

studentCounter.innerHTML=students+"+";

},15000);

}

/* ==========================================================
TYPEWRITER EFFECT
========================================================== */

const heroHeading=document.querySelector(".hero h1");

if(heroHeading){

const originalText=heroHeading.innerHTML;

heroHeading.innerHTML="";

let index=0;

function typeWriter(){

if(index<originalText.length){

heroHeading.innerHTML+=originalText.charAt(index);

index++;

setTimeout(typeWriter,18);

}

}

setTimeout(typeWriter,300);

}

/* ==========================================================
COPY UPI ID
========================================================== */

const upi=document.querySelector(".upi-id");

if(upi){

upi.style.cursor="pointer";

upi.title="Click to Copy";

upi.addEventListener("click",()=>{

navigator.clipboard.writeText(upi.innerText);

alert("UPI ID Copied");

});

}

/* ==========================================================
EXIT INTENT MESSAGE
========================================================== */

let exitShown=false;

document.addEventListener("mouseleave",(e)=>{

if(e.clientY<0 && !exitShown){

exitShown=true;

setTimeout(()=>{

alert("🎉 आजच प्रवेश घ्या! सध्या ₹2999 ऐवजी फक्त ₹599.");

},300);

}

});

/* ==========================================================
SCROLL TO PAYMENT
========================================================== */

document.querySelectorAll(".join-now").forEach(button=>{

button.addEventListener("click",(e)=>{

e.preventDefault();

const payment=document.getElementById("payment");

if(payment){

payment.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ==========================================================
PREMIUM SHADOW ON SCROLL
========================================================== */

window.addEventListener("scroll",()=>{

const cards=document.querySelectorAll(

".feature-card,.module-card,.product-card"

);

cards.forEach(card=>{

const rect=card.getBoundingClientRect();

if(rect.top<window.innerHeight-120){

card.style.boxShadow="0 20px 45px rgba(0,0,0,.12)";

}

});

});

/* ==========================================================
AUTO CLOSE MOBILE NAVBAR
========================================================== */

document.querySelectorAll(".navbar .nav-link").forEach(link=>{

link.addEventListener("click",()=>{

const navbar=document.querySelector(".navbar-collapse");

if(navbar && navbar.classList.contains("show")){

bootstrap.Collapse.getOrCreateInstance(navbar).hide();

}

});

});

/* ==========================================================
END
========================================================== */

console.log("RHONA Academy Premium Script Loaded Successfully");
