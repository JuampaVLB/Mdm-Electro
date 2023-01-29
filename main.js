'use strict';

const menu = document.querySelector('#btn-menu');
const navbar = document.querySelector('.navbar');
const items = document.querySelectorAll('.item');
const header = document.querySelector('#header');
const logo = document.querySelector('.logo')
const navbarList = document.querySelector('#navbar-list');
const cambio = document.querySelector('#bars');
const x = document.querySelector('#x');


window.addEventListener('scroll', () => {
    var header = document.querySelector('#header');
        header.classList.toggle('active', window.scrollY > 0 );
        menu.classList.toggle('color', window.scrollY > 0);     
})

menu.addEventListener("click", () => {
   x.classList.toggle("active");
   bars.classList.toggle("active");
   header.classList.toggle("show");
   navbar.classList.toggle("active");
   navbarList.classList.toggle("active");
   logo.classList.toggle("active");

   items.forEach(item => {
    item.style.color = 'black';
   });
})

items.forEach(element => {
  element.addEventListener('click', () => {
   logo.classList.remove("active");
   header.classList.remove("show");
   navbar.classList.remove("active");
   navbarList.classList.remove("active");
   bars.classList.remove("active");
   x.classList.remove("active");
  })
});

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.carousel__indicadores',
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__siguiente'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 2
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 4
        }
      }
    ]
  });
});