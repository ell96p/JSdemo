//////////MODAL
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const btnopenModal = document.querySelectorAll(".btn--show-modal");
const btncloseModal = document.querySelector(".btn--close-modal");
const nav = document.querySelector(".nav");

const closeModal = function (e) {
    e.preventDefault()
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function (e) {
    e.preventDefault()
    console.log("open")
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

btncloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)
btnopenModal.forEach(btn => btn.addEventListener('click', openModal))

////scrollIntoViewButton
const learnMore= document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

learnMore.addEventListener('click', function (e){
    e.preventDefault()
    section1.scrollIntoView({behavior: 'smooth'})
})

////scrollIntoView
const navLinks =document.querySelector('.nav__links');
const navLink =document.querySelectorAll('.nav__link');

navLink.forEach(nav=> nav.addEventListener('click', function(e){
e.preventDefault()
console.log(e.target)
if(e.target.classList.contains('link')){
    const id= e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})}

 }));

 ////////section 3

 const tabs = document.querySelectorAll('.informations__tab');
 const tabsContainer = document.querySelector('.informations__tab-container');
 const tabsContent = document.querySelectorAll('.informations__content');
console.log(tabs)
////////////////////////
 tabsContainer.addEventListener('click', function(e){
     const clicked = e.target.closest('.informations__tab');
    //  console.log(clicked)
     
     if(!clicked) return;
     
tabs.forEach(t => t.classList.remove('informations__tab--active'));
tabsContent.forEach(c => c.classList.remove('informations__content--active'));

 clicked.classList.add('informations__tab--active');
    
 document.querySelector(`.informations__content--${clicked.dataset.tab}`).classList.add('informations__content--active');
console.log(clicked.dataset.tab)

 })

/////////////////sticky nav

document.querySelector('.nav');

window.addEventListener("scroll", function(){
    nav.classList.toggle("nav__sticky", window.scrollY>0);
})

//////////////images, section 2, lazy loading
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer){
  const [entry] = entries;

if(!entry.isIntersecting) return;
entry.target.src = entry.target.dataset.src;

entry.target.addEventListener('load', function (){
  entry.target.classList.remove('lazy-img')});
observer.unobserve(entry.target);

}
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////////slider

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');

slider.style.transform = 'scale(0.2) translateX';

// slider.style.overflow = 'visible';

let curSlide =0;
let maxSlide = slides.length;

const goToSlide = function(slide){
    slides.forEach(
      (s,i) => (s.style.transform = `translateX(${100*(i- slide)}%)`)
      );
    };
    const nextSlide = function(){

        if(curSlide === maxSlide - 1){
          curSlide = 0;
        }else {
          curSlide++;
        }
        goToSlide(curSlide);
        
      };
    
    const prevSlide = function(){
      if(curSlide ===0){
        curSlide= maxSlide -1;
      }else{
      curSlide--;
    }
    
    
    goToSlide(curSlide)
   
    };
    
    btnRight.addEventListener('click', nextSlide)
    btnLeft.addEventListener('click', prevSlide)