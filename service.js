window.addEventListener('scroll', function() {
  const line = document.querySelector('.line');
  const linePosition = line.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (linePosition < windowHeight && line.style.width === '0px') {
      line.style.width = '90%'; /* Конечная ширина */
      line.style.opacity = '0.5'; /* Конечная прозрачность */
  } else if (linePosition >= windowHeight) {
      line.style.width = '0'; /* Сброс ширины */
      line.style.opacity = '0'; /* Сброс прозрачности */
  }
});

window.addEventListener('scroll', function() {
  const line = document.querySelector('.line2');
  const linePosition = line.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (linePosition < windowHeight && line.style.width === '0px') {
      line.style.width = '90%'; 
      line.style.opacity = '0.5'; 
  } else if (linePosition >= windowHeight) {
      line.style.width = '0'; 
      line.style.opacity = '0'; 
  }
});