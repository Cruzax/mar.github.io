// Filtre du catalogue de spectacles
const filtresBtns = document.querySelectorAll('.filtre-btn');
const spectacleItems = document.querySelectorAll('.spectacle-item');

filtresBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    filtresBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const filtre = this.dataset.filtre;

    spectacleItems.forEach(item => {
      if (filtre === 'tous' || item.dataset.cat === filtre) {
        item.style.display = '';
        item.style.animation = 'fadeIn .3s ease';
      } else {
        item.style.display = 'none';
      }
    });

    const visibles = [...spectacleItems].filter(i => i.style.display !== 'none').length;
    const counter = document.getElementById('spectacle-count');
    if (counter) counter.textContent = visibles;
  });
});
