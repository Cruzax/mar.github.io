(function() {
  var interet = document.getElementById('interet');
  var group = document.getElementById('spectacle-group');
  var select = document.getElementById('spectacle-select');

  // Affiche/cache le champ spectacle selon le dropdown
  interet.addEventListener('change', function() {
    group.style.display = this.value === 'spectacle' ? '' : 'none';
  });

  // Pré-remplissage depuis l'URL (?spectacle=Burn+out+!)
  var params = new URLSearchParams(window.location.search);
  var spec = params.get('spectacle');
  if (spec) {
    interet.value = 'spectacle';
    group.style.display = '';
    for (var i = 0; i < select.options.length; i++) {
      if (select.options[i].text === spec || spec.includes(select.options[i].text) || select.options[i].text.includes(spec)) {
        select.selectedIndex = i;
        break;
      }
    }
  }
})();
