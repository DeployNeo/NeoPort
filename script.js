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

function toggleNav() {
  document.getElementById('nav-links').classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
  type();

  // Fade in
  const fadeElements = document.querySelectorAll('.fade-in, .project-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active', 'visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));

  // Project filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        const category = card.dataset.category;
        card.style.display = (filter === 'all' || filter === category) ? 'block' : 'none';
      });
    });
  });
});
