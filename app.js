

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle, .logo, a, .menu-list-item, .featured-content, .movie-list-item-img, .featured-content__text, .featured-desc, .featured-content__body, .menu-list__hover, .menu__box");
const listitemstyle = document.querySelector(".menu-list-item");

ball.addEventListener("click",()=>{
    ball.classList.toggle("active")
});




$(function () {
  $('.toggle-ball').on('click' ,function(event) {
    $(this).toggleClass('active');
    $('body').toggleClass('active');	
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")

    listitemstyle.style.color= "black"
  })
})

if (localStorage.getItem('body') == 'active') {
    $('.body').addClass('active');
  }