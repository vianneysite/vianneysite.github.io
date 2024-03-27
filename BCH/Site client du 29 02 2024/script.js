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


