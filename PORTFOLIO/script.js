let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top < offset + height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });

        };
    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);


menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};


ScrollReveal({ 
    
    distance:"80px",
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading', { orignal:top});
ScrollReveal().reveal('.home-img, .skill-container,.project-box, .contact form ', { orignal:"bottom"});
ScrollReveal().reveal('.home-content h1, .about-img', { orignal:"left"});
ScrollReveal().reveal('.home-content p, .about-content', { orignal:"right"});
