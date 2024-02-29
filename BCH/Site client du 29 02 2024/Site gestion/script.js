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
  document.querySelector('.Validation-envoie').addEventListener('click', function(event) {
    event.preventDefault();

    var rows = document.querySelectorAll('table tbody tr');
    var data = [];

    rows.forEach(function(row) {
      var imgSrc = row.querySelector('.case img').src;
      var candidat;

      if (imgSrc.includes('case_done.png')) {
        candidat = 'true';
      } else if (imgSrc.includes('case_close.png')) {
        candidat = 'false';
      } else {
        return;
      }

      var rowData = {
        'nom': row.cells[0].textContent,
        'chambre': row.cells[1].textContent,
        'mail': row.cells[2].textContent,
        'tel': row.cells[3].textContent,
        'le': row.cells[4].textContent,
        'pourLe': row.cells[5].textContent,
        'nombrePersonnes': row.cells[6].textContent,
        'nombreNuit': row.cells[7].textContent,
        'petitDejeuner': row.cells[8].textContent,
        'candidat': candidat
      };

      data.push(rowData);
    });

    var queryString = data.map(function(row) {
      return Object.keys(row).map(function(key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(row[key]);
      }).join('&');
    }).join('&');

    window.location.href = 'Validation-envoie.php?' + queryString;
  });
}


  

