document.getElementById("first").onclick = function() {
    window.location.href = "file:///C:/Users/ccuk/Desktop/html%20codes%20workout/HTMLassgn2.html"; 
  };

  document.getElementById("second").onclick = function() {
    window.location.href = "http://127.0.0.1:8000/"; 
  };


  
/*
  const menuIcon = document.getElementById('navbar-toggler');
  const navbarNav = document.getElementById('navbarNav'); // Target the collapsible div
  
  menuIcon.addEventListener('click', () => {
      navbarNav.classList.toggle('show'); // Toggle 'show' class for Bootstrap's collapse
  }); 

const menuIcon = document.getElementById('navbar-toggler');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});*/
  ScrollReveal({ reset: true });
  ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
  });

  ScrollReveal().reveal('.about-me .heading,',{origin:'top'});
  ScrollReveal().reveal('.home-content,.home-img,.portfolio-box,.contact__form',{origin:'bottom'});
  ScrollReveal().reveal('.home-contact h1,.personal-details,.contact__item',{origin:'left'});
  ScrollReveal().reveal('.home-contact p, .skills',{origin:'right'});

