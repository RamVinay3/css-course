///////////////////////////////////////////////////////////

var year=document.querySelector('.year');
console.log(year)
year.textContent=new Date().getFullYear();


var closeEl=document.querySelector('.close');
var menuEl=document.querySelector('.menu');

var header=document.getElementsByClassName('header');

closeEl.addEventListener('click',function(){
  // header[0].classList.remove('nav-open'); same as below
  header[0].classList.toggle('nav-open');//if it is present it will remove otherwise adds

console.log('clicked');
});
menuEl.addEventListener('click',function(){
  header[0].classList.add('nav-open')
  console.log('iclicked');
  });
  
  /////////////////TO FIX SMOOTH SCROLLING//////////////////
  const allLinks=document.querySelectorAll('a:link');//return an array of elements

  allLinks.forEach((ele)=>{
    ele.addEventListener('click',function(e){
      e.preventDefault();
      const href=ele.getAttribute('href'); 

      //scroll back to top
      if(href=='#'){
        window.scrollTo({
          top:0,
          behavior:'smooth'
        })
      }
      //scroll to other links
      if(href!='#' && href.startsWith('#')){
        const sectionEl=document.querySelector(href);
        sectionEl.scrollIntoView({behavior:'smooth'})
      }

      //close mobile navigation
      if(ele.classList.contains('main-nav-link')){
        header[0].classList.toggle('nav-open');
      }

    })
  })
  
  
  
  //////////////STICKY NAVIGATION /////////////////////
  const heroSec=document.querySelector('.section-hero');
 const observer=new IntersectionObserver((entries)=>{

  const ent=entries[0];
  console.log(ent);
  if(!ent.isIntersecting){

    document.body.classList.toggle('sticky');
  }
  if(ent.isIntersecting && document.body.classList.contains('sticky')){
    //  document.querySelector('body').classList.remove('sticky');
    document.body.classList.toggle('sticky');
  }
 },
 {
  // in the view port
  root:null,
  threshold:0,//the function will trigger as soon as hero section is 0% inside root(viewport)element
  //The value  lies b/w 0 and 1 
  rootMargin:"-80px"
 });
 observer.observe(heroSec);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
