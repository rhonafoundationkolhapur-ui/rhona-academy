// ===============================
// RHONA FOUNDATION
// Premium JavaScript
// ===============================

// Navbar Shadow on Scroll

window.addEventListener("scroll", function () {

const navbar = document.querySelector(".navbar");

if(window.scrollY>50){

navbar.classList.add("shadow-lg");

}else{

navbar.classList.remove("shadow-lg");

}

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// Reveal Animation

const cards=document.querySelectorAll(".card");

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

card.style.transform="translateY(40px)";

card.style.transition="0.8s";

observer.observe(card);

});


// WhatsApp Floating Button

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/918482838716";

whatsapp.target="_blank";

whatsapp.innerHTML='<i class="fab fa-whatsapp"></i>';

whatsapp.className="whatsapp-float";

document.body.appendChild(whatsapp);


// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Offer Countdown (24 Hours)

let endDate = new Date();

endDate.setHours(endDate.getHours() + 24);

function updateCountdown(){

let now = new Date();

let diff = endDate - now;

if(diff<=0){

document.getElementById("countdown").innerHTML="Offer Ended";

return;

}

let h=Math.floor(diff/(1000*60*60));

let m=Math.floor((diff%(1000*60*60))/(1000*60));

let s=Math.floor((diff%(1000*60))/1000);

document.getElementById("countdown").innerHTML=

`${h}h ${m}m ${s}s`;

}

setInterval(updateCountdown,1000);

updateCountdown();

// Animated Counter

const counters=document.querySelectorAll('.counter');

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute('data-target');

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

}

update();

});

// Auto Product Slider

const slider=document.querySelector('#productSlider');

if(slider){

new bootstrap.Carousel(slider,{

interval:2500,

ride:'carousel',

pause:false,

wrap:true

});

}

// Review Slider

document.addEventListener("DOMContentLoaded", function(){

const reviewSlider=document.querySelector("#reviewSlider");

if(reviewSlider){

new bootstrap.Carousel(reviewSlider,{

interval:3000,

ride:"carousel",

pause:false,

wrap:true,

touch:true

});

}

});

const call=document.createElement("a");

call.href="tel:8482838716";

call.innerHTML="📞";

call.className="call-float";

document.body.appendChild(call);

// AOS Animation

AOS.init({

duration:1000,

once:true,

offset:100

});

// Premium Navbar

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>80){

nav.classList.add("scrolled");

}else{

nav.classList.remove("scrolled");

}

});

const heroTitle=document.querySelector(".hero h1");

if(heroTitle){

heroTitle.animate(

[

{opacity:0,transform:"translateY(40px)"},

{opacity:1,transform:"translateY(0)"}

],

{

duration:1200,

fill:"forwards"

}

);

}

// Loader

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1200);

});

// Offer Popup

window.onload=function(){

setTimeout(()=>{

new bootstrap.Modal(

document.getElementById('offerModal')

).show();

},2500);

}

// Live Student Counter

let students=1000;

setInterval(()=>{

students++;

document.getElementById("studentCount").innerHTML=students+"+";

},10000);
