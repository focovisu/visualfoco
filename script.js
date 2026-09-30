(function(){
  var btn = document.getElementById('cta-vaga');
  if(!btn) return;
  btn.addEventListener('click', function(){
    var rect = btn.getBoundingClientRect();
    var count = 12;
    for(var i = 0; i < count; i++){
      var heart = document.createElement('span');
      heart.className = 'heart-particle';
      heart.textContent = '💜';
      var startX = rect.left + (Math.random() * rect.width);
      var startY = rect.top + (rect.height / 2);
      var dx = Math.round(Math.random() * 90 - 45) + 'px';
      var rot = Math.round(Math.random() * 50 - 25) + 'deg';
      var size = (16 + Math.random() * 16).toFixed(0) + 'px';
      var duration = (900 + Math.random() * 700).toFixed(0) + 'ms';
      var delay = (Math.random() * 180).toFixed(0) + 'ms';

      heart.style.left = startX + 'px';
      heart.style.top = startY + 'px';
      heart.style.fontSize = size;
      heart.style.setProperty('--dx', dx);
      heart.style.setProperty('--rot', rot);
      heart.style.animationDuration = duration;
      heart.style.animationDelay = delay;

      document.body.appendChild(heart);
      (function(el, ms, d){
        setTimeout(function(){ el.remove(); }, ms + d + 100);
      })(heart, parseFloat(duration), parseFloat(delay));
    }
  });
})();
