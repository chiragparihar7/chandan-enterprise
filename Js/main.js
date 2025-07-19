// Responsive Navbar Toggle Script
// This script toggles the visibility of the navigation menu when the hamburger icon is clicked.
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  console.log("Hamburger clicked");
  navMenu.classList.toggle("open"); 
  console.log("Nav menu toggled");
});



// Slider Functionality
// This script handles the slider functionality, allowing users to navigate through slides.
let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Form Validation
// This script validates the form inputs before submission.

document.querySelector(".enquiry-form").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Thank you for contacting Chandan Enterprise! We’ll be in touch soon.");

  // Optionally, submit the form manually if you're using EmailJS or backend
  this.submit();
});