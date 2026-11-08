


const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('open-modal');
const closeBtn = document.getElementById('close-modal');

function openModal() {
  overlay.classList.add('open');
  closeBtn.focus();
}

function closeModal() {
  overlay.classList.remove('open');
  openBtn.focus();
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// click on the dark area (but not inside the modal) closes it
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});

// Escape closes it
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
});

const pages = Array.from(document.querySelectorAll('.pages > *'));
const indicator = document.getElementById('page-indicator');
const total = pages.length;
const visibility = new Array(total).fill(0);

function updateIndicator() {
  const best = visibility.indexOf(Math.max(...visibility));
  indicator.textContent = `Page ${best + 1} / ${total}`;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    visibility[pages.indexOf(entry.target)] = entry.intersectionRatio;    
  });
  updateIndicator();
}, {
  threshold: Array.from({length: 101 }, (_, i) => i / 100) 
});

pages.forEach((page) => observer.observe(page)); 
updateIndicator();

