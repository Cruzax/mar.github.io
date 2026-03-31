(function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    'section:not(.hero-carousel-wrap):not(.section-alt), .service-card, .pitch-card, .actu-card, .membre-card, .citation-band, .temoignages-section'
  ).forEach(function(el) {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();
