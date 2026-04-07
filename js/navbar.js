// Navbar transparente → fond blanc au scroll (hero only)
(function () {
  var navbar = document.querySelector('.navbar');
  if (!navbar) return;

  // Pages sans hero : navbar classique blanche dès le départ
  if (!document.querySelector('.hero-carousel-wrap')) {
    navbar.classList.add('scrolled');
    return;
  }

  function update() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
