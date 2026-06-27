// Toggle navbar for mobile view
const menuBars = document.getElementById('menu-bars');
const navbar = document.querySelector('.navbar');

menuBars.onclick = function() {
    navbar.classList.toggle('active');

};

// Optional: Toggle search icon effect
const searchIcon = document.getElementById('search-icons');
searchIcon.onclick = function() {
    alert('Search functionality coming soon!');
};

// Set background image dynamically
window.onload = function() {
    document.body.style.background = "#121212 url('1322308.jpeg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
};

// Anime slider functionality (automatic)
window.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.anime-slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  if (slides.length) {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  }
});

// Hianime-style slider functionality (automatic)
window.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.hianime-slide');

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
      });
  }
  function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  }
  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }
  document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
  });
  // Show first slide on load
  showSlide(currentSlide);
  // Automatic slide every 3 seconds
  setInterval(nextSlide, 3000);
});