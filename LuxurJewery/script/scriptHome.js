document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide-shower');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  
  function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Atualiza classes active (opcional)
      slides.forEach((slide, index) => {
          if (index === currentIndex) {
              slide.classList.add('active');
          } else {
              slide.classList.remove('active');
          }
      });
  }
  
  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
  }
  
  function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
  }
  
  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  
  // Opcional: Auto-play
  let slideInterval = setInterval(nextSlide, 3000);
  
  // Pausar auto-play quando o mouse estiver sobre o slider
  slider.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
  });
  
  slider.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, 3000);
  });
  
  // Inicializar
  updateSlider();
});