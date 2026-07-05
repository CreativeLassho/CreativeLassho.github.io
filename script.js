/*====================================
  Lassho Portfolio v1.0
====================================*/


/*========================
Scroll Reveal Animation
========================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((el)=>{

el.classList.add("fade");

observer.observe(el);

});


/*========================
Back To Top Button
========================*/

const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}


/*========================
Typing Effect
========================*/

const texts=[

"Computer Science Student",

"Media Producer",

"Volunteer",

"Digital Creator",

"Web Developer"

];

let count=0;

let index=0;

let currentText="";

let letter="";

const typing=document.createElement("h2");

typing.style.color="#38bdf8";

typing.style.marginTop="20px";

typing.style.fontWeight="500";

document.querySelector(".hero").appendChild(typing);

(function type(){

if(count===texts.length){

count=0;

}

currentText=texts[count];

letter=currentText.slice(0,++index);

typing.textContent=letter;

if(letter.length===currentText.length){

count++;

index=0;

setTimeout(type,1200);

}else{

setTimeout(type,80);

}

})();


/*========================
Navbar Active Link
========================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


/*========================
Welcome Message
========================*/

window.addEventListener("load",()=>{

console.log("Welcome to Lassho Portfolio");

});
