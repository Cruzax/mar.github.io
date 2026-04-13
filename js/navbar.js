// Navbar transparente → fond blanc au scroll (hero only)
(function () {
  var navbar = document.querySelector('.navbar');
  if (!navbar) return;

  // Pages sans hero : navbar classique blanche dès le départ
  if (!document.querySelector('.hero-carousel-wrap') && !document.querySelector('.pitch-hero')) {
    navbar.classList.add('scrolled');
    return;
  }

  function update() {
    var menuOpen = document.querySelector('.navbar-collapse.show');
    if (window.scrollY > 40 || menuOpen) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Quand le menu burger s'ouvre/se ferme
  var collapse = document.querySelector('.navbar-collapse');
  if (collapse) {
    collapse.addEventListener('show.bs.collapse', function () {
      navbar.classList.add('scrolled');
    });
    collapse.addEventListener('hidden.bs.collapse', function () {
      update();
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
