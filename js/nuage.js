(function(){
  var words=[
    {t:'Humanisme',s:5},{t:'Équité',s:3},{t:'Collaboration',s:4},{t:'Changement',s:3},
    {t:'Pouvoir d\'agir',s:5},{t:'Citoyenneté',s:2},{t:'Co-construction',s:3},{t:'Intelligence collective',s:4},
    {t:'Ouverture',s:2},{t:'Respect',s:3},{t:'Transformation',s:5},{t:'Écoute',s:2},
    {t:'Liberté',s:4},{t:'Empathie',s:3},{t:'Bienveillance',s:4},{t:'Théâtre',s:5},
    {t:'Forum',s:4},{t:'Jeux',s:2},{t:'Scène',s:3},{t:'Dialogue',s:4},
    {t:'Engagement',s:3},{t:'Créer',s:2},{t:'Expérimenter',s:3},{t:'Surprendre',s:2}
  ];
  var variants=['nuage-v-rouge','nuage-v-ambre','nuage-v-dark','nuage-v-terracotta','nuage-v-ocre','nuage-v-ardoise'];
  var anims=['nuageFloat1','nuageFloat2','nuageFloat3'];
  var container=document.getElementById('nuageCloud');
  for(var i=words.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=words[i];words[i]=words[j];words[j]=tmp}
  words.forEach(function(w,idx){
    var a=document.createElement('a');
    a.href='spectacles.html';
    a.className='nuage-word nuage-s'+w.s+' '+variants[idx%variants.length];
    a.textContent=w.t;
    var rot=(Math.random()*24-12).toFixed(1);
    a.style.setProperty('--rot',rot+'deg');
    a.style.transform='rotate('+rot+'deg)';
    var anim=anims[Math.floor(Math.random()*3)];
    var dur=(3+Math.random()*4).toFixed(1);
    var delay=(Math.random()*3).toFixed(1);
    a.style.animation=anim+' '+dur+'s ease-in-out '+delay+'s infinite';
    container.appendChild(a);
  });
})();
