// script.js
window.onload = function () {
    const loaderBar = document.getElementById('loader-bar');

    // Simulate loading progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 5; // Adjust the increment as needed
        loaderBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(progressInterval);
            // Optionally, you can hide the loader bar when loading is complete
            loaderBar.style.display = 'none';
        }
    }, 200); // Adjust the interval as needed
};



//Swiper JS

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
    },
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        slidesPerView: 'auto',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: {
                delay: 2000,
            },
            
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
            autoplay: {
                delay: 2000,
            },
        },
    },
});


//GSAP FOR NAV BAR
gsap.to(".company-name", {
    scrollTrigger: {
        trigger: "#history",
        start: "0% 100%",
        end: "bottom 0%",
        scrub: .4,
        // markers: true,
    },
    opacity: 1,

});


const companyName = document.querySelector('.company-name');
const navbar = document.querySelector('.navbar');
const menuItems = document.querySelectorAll('.menu-item');

const observer = new MutationObserver(mutationsList => {
    for (let mutation of mutationsList) {
        if (mutation.attributeName === 'style') {
            const opacity = parseFloat(window.getComputedStyle(companyName).getPropertyValue('opacity'));

            if (opacity > 0.5) {
                navbar.style.backgroundColor = 'white';
                menuItems.forEach(item => {
                    item.style.color = '#000';
                    item.style.borderBottomColor = '#000';
                });
            } else {
                navbar.style.backgroundColor = 'transparent';
                menuItems.forEach(item => {
                    item.style.color = '#fff'; // Set to your desired default color
                    item.style.borderBottomColor = 'white';
                });
            }
        }
    }
});

observer.observe(companyName, {attributes: true });




