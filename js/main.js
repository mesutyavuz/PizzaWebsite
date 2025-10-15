// === SLIDER ===
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

const dotsContainer = document.createElement('div');
dotsContainer.className = 'dots';
slider.appendChild(dotsContainer);

slides.forEach(function (_, index) {
  const dot = document.createElement('span');
  if (index === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
  dot.addEventListener('click', function () { showSlide(index); });
});

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  dotsContainer.children[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dotsContainer.children[currentSlide].classList.add('active');
}
function nextSlide(){ showSlide(currentSlide + 1); }
function prevSlide(){ showSlide(currentSlide - 1); }

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

let slideInterval = setInterval(nextSlide, 5000);
slider.addEventListener('mouseover', function(){ clearInterval(slideInterval); });
slider.addEventListener('mouseout', function(){ slideInterval = setInterval(nextSlide, 5000); });

// === MENU POPUP ===
(function(){
  var popup = document.getElementById('image-popup');
  if (!popup) return;
  var popupImg = popup.querySelector('img');
  var popupTimer = null;
  var items = document.querySelectorAll('.menu-item');

  function attachPopupEvents(item){
    var imgSrc = item.getAttribute('data-img');
    var nameEl = item.querySelector('.name');
    if (imgSrc && nameEl){
      nameEl.addEventListener('click', function(e){
        e.stopPropagation();
        popupImg.src = imgSrc;
        popup.style.display = 'block';
        if (popupTimer) clearTimeout(popupTimer);
        popupTimer = setTimeout(function(){ popup.style.display = 'none'; }, 5000);
      });
    }
  }
  for (var i=0;i<items.length;i++){ attachPopupEvents(items[i]); }

  document.addEventListener('click', function(e){
    if (popup.style.display === 'block' && !popup.contains(e.target)){
      popup.style.display = 'none';
      if (popupTimer) clearTimeout(popupTimer);
    }
  });
})();
// === YUKARI DÖN BUTONU ===
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// === HAMBURGER ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('active');
  document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});
