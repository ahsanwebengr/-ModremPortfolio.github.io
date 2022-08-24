// Responsive navbar for mobile 

let toggle = document.querySelector(".toggle");
let menuBar = document.querySelector(".menu-bar");

toggle.addEventListener('click', () => {
    menuBar.classList.toggle('show');
})

// Hide after clicking the nav links 

document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click", () => {
        toggle.classList.remove("show");
        menuBar.classList.remove("show");
    }));

// Color change on scroll 
const nav = document.querySelector(".navbar");
window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}
// Create tab component 
const tabs = document.querySelectorAll('.p-btn');
const activeRow = document.querySelectorAll('.tabRow');

tabs.forEach((tab, ind) => {
    tab.addEventListener('click', () => {

        activeRow.forEach(row => row.classList.remove('active'));
        activeRow[ind].classList.add('active');
    });
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


// Declear Variables 
const counterSection = document.querySelector('.milestone');

// Use isIntersecting for animate counter on specific page 
const counterObserver = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return

    // Make the counter 

    const counters = document.querySelectorAll('.count');
    let interval = 4000;

    counters.forEach(count => {
        let startValue = 0;
        const endValue = parseInt(count.getAttribute('data-number'));
        const duration = Math.floor(interval / endValue);


        const counter = setInterval(() => {
            startValue += 1;
            count.textContent = `${startValue} +`;

            if (startValue === endValue) {
                clearInterval(counter);
            }

        }, duration);

    });

    observer.unobserve(counterSection)

}, {
    root: null,
    threshold: 0,

})

counterObserver.observe(counterSection)


//   Back to top code 
const backTop = document.querySelector(".backTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
        backTop.classList.add("active");
    } else {
        backTop.classList.remove("active");
    }
});


// Copy right year 

const yearEl = document.querySelector('#year');
const currYear = new Date().getFullYear();

yearEl.innerHTML = currYear ;

