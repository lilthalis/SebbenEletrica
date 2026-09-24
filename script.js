const whatsappNumber = '554632141261';
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.innerHTML = `<i class="fa-solid fa-${isOpen ? 'xmark' : 'bars'}"></i>`;
});

document.querySelectorAll('.nav-menu a').forEach((link) => link.addEventListener('click', () => {
  navMenu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
}));

document.querySelector('#quote-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get('name').trim();
  const phone = form.get('phone').trim() || 'não informado';
  const project = form.get('project');
  const details = form.get('details').trim() || 'Ainda vou detalhar minha necessidade.';
  const message = `Olá, Sebben Avenida!%0A%0A*Pedido de orçamento*%0A*Nome:* ${encodeURIComponent(name)}%0A*WhatsApp:* ${encodeURIComponent(phone)}%0A*Projeto:* ${encodeURIComponent(project)}%0A*Necessidade:* ${encodeURIComponent(details)}%0A%0AGostaria de receber uma orientação e orçamento.`;
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener');
});

const slides = [...document.querySelectorAll('.testimonial')];
const dots = document.querySelector('.slider-dots');
let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === currentSlide));
  [...dots.children].forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === currentSlide));
}

slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.setAttribute('aria-label', `Ver avaliação ${index + 1}`);
  dot.addEventListener('click', () => showSlide(index));
  dots.append(dot);
});
document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));
showSlide(0);
setInterval(() => showSlide(currentSlide + 1), 6500);
document.querySelector('#year').textContent = new Date().getFullYear();
