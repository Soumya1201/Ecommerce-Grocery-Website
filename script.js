let serachForm = document.querySelector('.search-form');

document.querySelector('#search-btn').addEventListener("click", ()=>{
    serachForm.classList.toggle('active');

    // serachForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    navBar.classList.remove("active");
})

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').addEventListener("click", ()=>{
    shoppingCart.classList.toggle('active');

    serachForm.classList.remove("active");
    // shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    navBar.classList.remove("active");
})

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').addEventListener("click", ()=>{
    loginForm.classList.toggle('active');

    serachForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    // loginForm.classList.remove("active");
    navBar.classList.remove("active");
})

let navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').addEventListener("click", ()=>{
    navBar.classList.toggle('active');

    serachForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    // navBar.classList.remove("active");
})

window.scroll = () =>{
    serachForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    navBar.classList.remove("active");
}


var swiper = new Swiper(".product-slider", {
    loop:true,
    // slidesPerView: 1,
    spaceBetween: 20,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autoplay:
    {
        delay: 7500,
        disableOnInteracton: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    // slidesPerView: 1,
    spaceBetween: 20,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autoplay:
    {
        delay: 7500,
        disableOnInteracton: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });