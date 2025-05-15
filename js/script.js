const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

showSlide(currentSlide);

document.getElementById('contactForm').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const destination = document.getElementById('destination').value.trim();

  if (!name || !email || !destination) {
    alert('Semua field harus diisi.');
    event.preventDefault();
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Masukkan email yang valid.');
    event.preventDefault();
  }
});
