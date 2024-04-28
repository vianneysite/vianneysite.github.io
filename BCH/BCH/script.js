var isMenuVisible = false;
function displayMenu() {
  var menu = document.getElementById('menu');
  if (isMenuVisible == false) {
    console.log('ouvrir');
    document.getElementById("open").classList.remove("on");
    document.getElementById("close").classList.add("on");
    document.getElementById("navbar_smartphone").classList.add("on");
    isMenuVisible = true;
  } else {
    console.log('fermer');
    document.getElementById("open").classList.add("on");
    document.getElementById("close").classList.remove("on");
    document.getElementById("navbar_smartphone").classList.remove("on");
    isMenuVisible = false;

  }

}

//A retravailler

const tousLesInputs = document.querySelectorAll('input');


tousLesInputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {

      input.style.backgroundColor = '#e5eaee';
    } else {

      input.style.backgroundColor = 'rgba(255, 255, 255, 0.36)';
    }
  });
});

//


const div = document.querySelector('.header');


window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    div.classList.add('scroll');

  }
  else {
    div.classList.remove('scroll');

  }
});

document.addEventListener('DOMContentLoaded', function () {
  const envoieForm = document.getElementById('EnvoieForm');
  const recaptcha = document.getElementById('recaptcha');

  envoieForm.addEventListener('click', function () {
    recaptcha.classList.add('true');
  });
});


const checkbox = document.getElementById('robotCheckbox');
const recaptchaElement = document.querySelector('.recaptcha');
let mouseMoved = false;


checkbox.addEventListener('click', () => {
  if (!mouseMoved) {

    console.log('Vérification échouée : robot détecté !');
    recaptchaElement.classList.add('robot');
    recaptchaElement.classList.remove('humain');
    setTimeout(() => {
      checkboxElement.checked = false;
      console.log('Clic effectué sur la case robotCheckbox !');
    }, 100);
  } else {

    console.log('Vérification réussie : utilisateur humain !');
    recaptchaElement.classList.add('humain');
    recaptchaElement.classList.remove('robot');
  }
});

document.addEventListener('mousemove', () => {
  mouseMoved = true;
});
const checkboxElement = document.getElementById('robotCheckbox');

//Robot de test
/*
// Planifier l'exécution du clic après 10 secondes
setTimeout(() => {
  // Simuler un clic sur la case
  checkboxElement.click();

  // Vérification (facultative) : afficher un message dans la console
  console.log('Clic effectué sur la case robotCheckbox !');
}, 5000); // 5000 millisecondes équivalent à 10 secondes

// Décompte
let countdown = 5;
const countdownInterval = setInterval(() => {
  console.log(`Décompte : ${countdown} secondes`);
  countdown--;

  if (countdown < 0) {
    clearInterval(countdownInterval);
  }
}, 1000); // Affiche le décompte chaque seconde

*/
