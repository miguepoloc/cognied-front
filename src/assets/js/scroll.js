// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    Scroll();
};

// Get the navbar
var navbar = document.getElementById("navBar");
var home = document.getElementById("Home");
var section2 = document.getElementById("section-2");
// Get the offset position of the navbar
var positionSection = section2.offsetTop; 

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function Scroll() {
    if (window.pageYOffset >= positionSection) {
        alert("hola")
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-white");
    } else {
        navbar.classList.remove("bg-white");
        navbar.classList.add("bg-transparent");
    }
}

