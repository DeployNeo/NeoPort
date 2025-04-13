// Typing effect for intro
const typingTexts = [
  "Python, JavaScript, and C Developer.",
  "100+ GitHub repositories.",
  "Building Discord bots and tools.",
  "Loves automation and backend logic."
];

let i = 0, j = 0, currentText = '', isDeleting = false;

function type() {
  const typingElement = document.querySelector('.typing');
  if (!typingElement) return;

  currentText = typingTexts[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  typingElement.innerHTML = currentText.substring(0, j);

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(type, 2000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % typingTexts.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 40 : 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();

  // Scroll animations
  const fadeElements = document.querySelectorAll('.fade-in');
  const cardElements = document.querySelectorAll('.project-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  fadeElements.forEach(el => observer.observe(el));
  cardElements.forEach(el => observer.observe(el));
});
