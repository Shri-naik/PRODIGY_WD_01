// Change navbar color on scroll
window.onscroll = function() {
    let navbar = document.querySelector('nav');
    let scrollValue = window.scrollY;
    
    if (scrollValue > 50) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // Darker background on scroll
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Lighter background at the top
    }
};







