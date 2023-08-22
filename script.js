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



//Navbar on different section

const history = document.getElementById("history");
const navbar = document.querySelector(".navbar");
const menuItems = document.querySelectorAll(".menu-item");
const companyName = document.querySelector(".company-name");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // When the second section is at the top
    if (entry.target.id === "history" && entry.isIntersecting) {
        navbar.style.backgroundColor = "#fff"; // Change this color as needed
        menuItems.forEach(menuItem => {
            menuItem.style.color = "#000"; // Change this color as needed
            menuItem.style.borderBottom = "1px solid #000"; // Change this color as needed
        });
        companyName.style.display="block";
    } else {
        menuItems.forEach(menuItem => {
            menuItem.style.borderBottom = "1px solid #fff"; // Change this color as needed
            menuItem.style.color = "#fff"; // Change this color as needed
        })
        companyName.style.display="none";
        navbar.style.backgroundColor = "transparent";
    }
  });
}, { threshold: 1 });

observer.observe(history);



//Swiper JS

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
