const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.querySelector('body');
const mynavbar = document.getElementById('mynavbar');
const footer = document.querySelector("footer");
const about = document.getElementById('about');
const art1 = document.getElementById('art1');
const lang = document.getElementById('lang');
const advice = document.getElementById('advice');
const lang_block = document.querySelectorAll(".lang_block");
const divider = document.querySelectorAll(".divider");
const navlink = document.querySelectorAll(".nav-link");
const content_container = document.querySelectorAll(".content-container");
const content_container_inv = document.querySelectorAll(".content-container-inverser");
const more = document.getElementById('more');
// adding dark mode
darkModeToggle.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  footer.classList.toggle('dark-block');
  mynavbar.classList.toggle('dark-block');
  mynavbar.classList.toggle('dark-mode');
  about.classList.toggle('dark-mode');
  art1.classList.toggle('dark-block');
  lang.classList.toggle('dark-mode');
  advice.classList.toggle('dark-mode');
  more.classList.toggle('dark-block');
  lang_block.forEach((block) => {
    block.classList.toggle('dark-block');
  });
  divider.forEach((block) => {
    block.classList.toggle('dark-divider');
  });
  navlink.forEach((block) => {
    block.classList.toggle('white');
  });
  content_container.forEach((block) => {
    block.classList.toggle('dark-mode');
  });
  content_container_inv.forEach((block) => {
    block.classList.toggle('dark-mode');
  });


});


/* scroll transition */
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, options);

document.querySelectorAll('#art1,#lang,#advice,footer,#advice,#more').forEach(el => {
    observer.observe(el);
  });


