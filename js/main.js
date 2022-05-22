// Responisve navbar for mobile 
let toggle = document.querySelector(".toggle");
let menuBar = document.querySelector(".menu-bar");

toggle.addEventListener('click', function(){
    menuBar.classList.toggle('show');
})

// Hide after clicking the nav links 

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    toggle.classList.remove("show");
    menuBar.classList.remove("show");
}));

// Color change on scroll 
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}
// Create tab component 
let p_btns = document.querySelector(".portfolio-btn");
let p_btn = document.querySelectorAll(".p-btn");

let projectimg = document.querySelectorAll(".project-img")

p_btns.addEventListener('click' , (e)=>{
    let p_btn_clicked = e.target;
    console.log('p_btn_clicked');

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add(".p-btn-active");

    // to find the numbers in data attr 
    let btn_num = p_btn_clicked.dataset.btnNum;
console.log(btn_num);

const img_active = document.querySelectorAll('.p-btn--${btn_num}');

p_img_elem.forEach((curElem) => curElem.classList.add("not-active"));

img_active.forEach((curElem) => curElem.classList.remove("not-active"));
});


// Swiper JS code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 350px
        0: {
            slidesPerView: 1,
          },
        
        // when window width is >= 992px
        992: {
          slidesPerView: 2,
          spaceBetween: 40
        }
      }
  });

// Milestone Counter 
var project = document.querySelector("#num1");

        let count = 1 ;
        setInterval(() => {
            if(count < 2000){
                count++;
                project.innerHTML = count;
            }
        }, 1);

        var client = document.querySelector("#num2");

        let count2 = 1 ;
        setInterval(() => {
            if(count2 < 6000){
                count2++;
                client.innerHTML = count2;
            }
        }, 1);

  //   Back to top code 
let backTop = document.querySelector(".backTop");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 400){
        backTop.classList.add("active");
    } else{
        backTop.classList.remove("active");
    }
});
       



