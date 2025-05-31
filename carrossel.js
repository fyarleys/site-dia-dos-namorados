// Carrossel automático com controles manuais
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carrossel-track');
  const slides = document.querySelectorAll('.carrossel-slide');
  const btnPrev = document.querySelector('.carrossel-btn.prev');
  const btnNext = document.querySelector('.carrossel-btn.next');
  
  let currentIndex = 0;
  let intervalo;
  const slideCount = slides.length;
  
  function goToSlide(index) {
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;
    
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  function nextSlide() {
    goToSlide(currentIndex + 1);
  }
  
  function prevSlide() {
    goToSlide(currentIndex - 1);
  }
  
  function startAutoSlide() {
    intervalo = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
  }
  
  function resetAutoSlide() {
    clearInterval(intervalo);
    startAutoSlide();
  }
  
  // Event listeners
  btnNext.addEventListener('click', function() {
    nextSlide();
    resetAutoSlide();
  });
  
  btnPrev.addEventListener('click', function() {
    prevSlide();
    resetAutoSlide();
  });
  
  // Pausa quando o mouse está sobre o carrossel
  const carrossel = document.querySelector('.carrossel-container');
  carrossel.addEventListener('mouseenter', function() {
    clearInterval(intervalo);
  });
  
  carrossel.addEventListener('mouseleave', startAutoSlide);
  
  // Inicia o carrossel
  startAutoSlide();
});