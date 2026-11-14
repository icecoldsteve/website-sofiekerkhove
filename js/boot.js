/* Zet .js op <html> zodat start-toestanden van animaties alleen met JavaScript gelden.
   Vangnet: start site.js niet binnen 4 s, dan gaat .js weer weg en staat alles gewoon zichtbaar. */
(function () {
  var d = document.documentElement;
  d.classList.add('js');
  setTimeout(function () { if (!window.SK_READY) d.classList.remove('js'); }, 4000);
})();
