var isMenuVisible = false;
function displayMenu() {
    var menu = document.getElementById('menu');
    if (isMenuVisible == false) {
        menu.style.display = 'flex';
        isMenuVisible = true;
    } else {
        menu.style.display = 'none';
        isMenuVisible = false;

    }

}
const div = document.querySelector('.header');


window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        div.classList.add('scroll');

    }
    else {
        div.classList.remove('scroll');

    }
});

function OpenMenu() {
    console.log('ouvrir');
    document.getElementById("open").classList.remove("on");
    document.getElementById("close").classList.add("on");
    document.getElementById("navbar_smartphone").classList.add("on");
}

function CloseMenu() {
    console.log('fermer');
    document.getElementById("open").classList.add("on");
    document.getElementById("close").classList.remove("on");
    document.getElementById("navbar_smartphone").classList.remove("on");
}
