var loader = document.getElementById("preloader")

window.addEventListener("load", function(){
  loader.style.display= "none"
})

const menuBtn= document.querySelector('.menu-btn')
let menuOpen=false
const navLinks= document.getElementById('nav-links')


menuBtn.addEventListener('click', ()=>{
  if(!menuOpen){
    menuBtn.classList.add('open')
    menuOpen=true
    }else {
      menuBtn.classList.remove('open')
      menuOpen=false 
    }
  navLinks.classList.toggle('show')
})

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-links')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll reveal Animation
const sr = ScrollReveal({
  origin:'top',
  distance:'80px',
  duration:2000,
  reset:true
})
 
// Scroll Home
sr.reveal('.home_sr',{})
sr.reveal('.btn',{delay:200})
sr.reveal('.round',{delay:400})

// Scroll Home
sr.reveal('.p-img',{})
sr.reveal('.about_col-2',{delay:200})

sr.reveal('.col-3',{delay:200})
sr.reveal('.col-4',{interval:200})
 
sr.reveal('.skill_text',{delay:200})
sr.reveal('.icon-col i',{interval:200})

sr.reveal('.contact',{delay:200})
sr.reveal('.form', {interval:200})
