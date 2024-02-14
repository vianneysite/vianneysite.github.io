function Cocher(event) {
  var cases = document.querySelectorAll('.case img');
  var demande = event.target.parentNode.parentNode.querySelector('#demande').textContent;

  if (event.target.src.includes('case_done.png')) {
      for (var i = 0; i < cases.length; i++) {
          if (cases[i].parentNode.parentNode.querySelector('#demande').textContent === demande) {
              cases[i].src = 'img/case_vide.png';
          }
      }
  } else {
      for (var i = 0; i < cases.length; i++) {
          if (cases[i].parentNode.parentNode.querySelector('#demande').textContent === demande) {
              if (cases[i] === event.target) {
                  cases[i].src = 'img/case_done.png';
              } else {
                  cases[i].src = 'img/case_close.png';
              }
          }
      }
  }
}
window.onload = function() {
  var images = document.querySelectorAll('.case img');
  for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('contextmenu', function(event) {
          event.preventDefault();
          event.target.src = 'img/case_close.png';
      });
  }
}

  