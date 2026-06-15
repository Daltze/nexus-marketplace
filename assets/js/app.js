// NEXUS MARKETPLACE V2

console.log("NEXUS MARKETPLACE carregado com sucesso");

// Scroll suave para links internos

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// Header transparente -> sólido ao scroll

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

header.style.background = "rgba(5,8,22,.95)";
header.style.borderBottom = "1px solid rgba(255,255,255,.08)";

}else{

header.style.background = "rgba(5,8,22,.75)";

}

});

// Animação de entrada dos cards

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".card, .featured-card, .stat, .about-grid div"
).forEach(item=>{

item.style.opacity = "0";
item.style.transform = "translateY(40px)";
item.style.transition = "all .8s ease";

observer.observe(item);

});

// Formulário

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Mensagem enviada com sucesso! Entraremos em contacto em breve."
);

form.reset();

});

}

// Contador animado

const stats = document.querySelectorAll(".stat h3");

const runCounter = (element, target) => {

let current = 0;

const increment = target / 80;

const update = () => {

current += increment;

if(current < target){

element.textContent = Math.floor(current) + "+";

requestAnimationFrame(update);

}else{

if(target === 99){

element.textContent = "99%";
}else{
element.textContent = target + "+";
}

}

};

update();

};

const statObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const value = parseInt(
entry.target.textContent.replace(/\D/g,'')
);

runCounter(entry.target,value);

statObserver.unobserve(entry.target);

}

});

},{
threshold:0.5
});

stats.forEach(stat=>{

statObserver.observe(stat);

});