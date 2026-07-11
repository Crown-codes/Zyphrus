/* ============================
   ZYPHRUS JavaScript
============================ */

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });
});

// Sticky Navbar Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(5,5,5,.9)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

    }else{

        header.style.background = "rgba(5,5,5,.6)";
        header.style.boxShadow = "none";

    }

});

// Hero Logo Float
const heroLogo = document.querySelector(".hero-right img");

if(heroLogo){

setInterval(()=>{

heroLogo.style.transform="translateY(-12px)";

setTimeout(()=>{

heroLogo.style.transform="translateY(0px)";

},1500);

},3000);

}

// Product Card Hover Glow
const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 35px rgba(122,0,255,.45)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});

// Scroll Reveal
const reveals=document.querySelectorAll("section");

const revealSection=()=>{

const trigger=window.innerHeight*0.85;

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<trigger){

section.style.opacity="1";
section.style.transform="translateY(0)";

}

});

}

reveals.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition="1s";

});

window.addEventListener("scroll",revealSection);

revealSection();

// Back To Top Button
const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
right:25px;
bottom:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:linear-gradient(90deg,#7A00FF,#FF1FCF);
color:white;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 10px 25px rgba(122,0,255,.4);
z-index:999;
transition:.3s;
`;

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

// Console Message
console.log("Welcome to ZYPHRUS 🚀");
