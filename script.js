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
