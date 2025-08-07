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
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Form Validation
// This script validates the form inputs before submission.

document
  .querySelector(".enquiry-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    alert(
      "Thank you for contacting Chandan Enterprise! We’ll be in touch soon."
    );

    // Optionally, submit the form manually if you're using EmailJS or backend
    this.submit();
  });

// Services Image page JS

const subServiceData = {
  waterproofing: ["Terrace Coating", "Wall Sealing", "Crack Filling"],
  painting: ["Interior Paint", "Exterior Coating", "Texture Finish"],
  civil: ["Wall Repair", "Concrete Work", "Structural Fixes"],
  "leak-detection": ["Thermal Scan", "Pressure Test", "Moisture Detection"],
};

const imagesByService = {
  waterproofing: [
    "https://source.unsplash.com/800x400/?waterproofing",
    "https://source.unsplash.com/800x400/?terrace",
    "https://source.unsplash.com/800x400/?building",
    "https://source.unsplash.com/800x400/?roof",
  ],
  painting: [
    "https://source.unsplash.com/800x400/?painting",
    "https://source.unsplash.com/800x400/?interior",
    "https://source.unsplash.com/800x400/?wall",
    "https://source.unsplash.com/800x400/?brush",
  ],
  civil: [
    "https://source.unsplash.com/800x400/?construction",
    "https://source.unsplash.com/800x400/?masonry",
    "https://source.unsplash.com/800x400/?bricks",
    "https://source.unsplash.com/800x400/?repair",
  ],
  "leak-detection": [
    "https://source.unsplash.com/800x400/?leak",
    "https://source.unsplash.com/800x400/?pipe",
    "https://source.unsplash.com/800x400/?thermal",
    "https://source.unsplash.com/800x400/?detection",
  ],
};

const tabBtns = document.querySelectorAll(".tab-btn");
const subServiceList = document.getElementById("subServiceList");
const mainImage = document.getElementById("mainImage");
const thumbnails = document.getElementById("thumbnails");
console.log(tabBtns)
let activeCategory = "waterproofing";

function updateSubServices(category) {
  subServiceList.innerHTML = "";
  subServiceData[category].forEach((service) => {
    const btn = document.createElement("button");
    btn.innerText = service;
    btn.onclick = () => updateImages(category);
    subServiceList.appendChild(btn);
  });
}

function updateImages(category) {
  thumbnails.innerHTML = "";
  const imgs = imagesByService[category];
  mainImage.src = imgs[0];
  imgs.forEach((img, i) => {
    const thumb = document.createElement("img");
    thumb.src = img;
    if (i === 0) thumb.classList.add("active");
    thumb.onclick = () => {
      document
        .querySelectorAll(".thumbnail-row img")
        .forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
      mainImage.src = img;
    };
    thumbnails.appendChild(thumb);
  });
}

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.category;
    updateSubServices(activeCategory);
    updateImages(activeCategory);
  });
});

// Initialize default
updateSubServices(activeCategory);
updateImages(activeCategory);
