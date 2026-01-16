const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
    const isVisible = dropdownContent.style.display === 'block' ;

    dropdownContent.style.display = isVisible ? 'none' : 'block';

    dropdownBtn.textContent = isVisible ? ' viv.pdf ▼ ' : ' viv.pdf ▲ ';
});

document.addEventListener('click', (e) => {
  if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
    dropdownContent.style.display = 'none';
    dropdownBtn.textContent = ' viv.pdf ▼ ';
  }
});

