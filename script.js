 /* let menuicon = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav'); 
 
 menuicon.onclick =() => {
    menuicon.classList.toggle('fa-solid fa-xmark');
    nav.classList.toggle('active');
 };
 /*-----scroll section*/
let sections =document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav u li a');



/*-----sticky navbar*/

window.onscroll =() =>{
sections.forEach(sec=>{
    let top  = window.scrollY;
    let offset = sec.offsetTop -130;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >=offset && top < offset + height){
       navlinks.forEach(links =>{
     links.classList.remove('active');
     document.querySelector('header nav u li a[href*='+ id +']').classList.add('active');
       });
    };
});


let header = document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY >100);

/*remove menu icon when click navbar link*/
menuicon.classList.remove('fa-solid fa-xmark');
nav.classList.remove('active');


};

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for (tablink of tablinks ) {
        tablink.classList.remove("active-link");
}
for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");}




var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}




      const scriptURL = '<https://script.google.com/macros/s/AKfycby2OFJfKAYDqzZ4UwpqijhIrRxSM8YLrSp8C71AcWLGOtZ8bz292X8VI21X8a15QUWDaw/exec>'
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById("msg");
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(_response => {
             msg.innerHTML = "message sent successfully" ;
             setTimeout(function(){
                msg.innerHTML 
             },4500)
             form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })

ScrollReveal({reset: true, 
     distance: '800px',
     duration: 180, 
     delay :200, 
    });
    ScrollReveal().reveal('.home-text, .heading',  { origin: 'top' }); 
    ScrollReveal().reveal('.home-img img, .services-container, .project-container, .contact form',  { origin: 'bottom' }); 
    ScrollReveal().reveal('.home-text h1, .about-img img',  { origin: 'left' }); 
    ScrollReveal().reveal('.home-text h3, .home-text p, .about-content',  { origin: 'right' }); 