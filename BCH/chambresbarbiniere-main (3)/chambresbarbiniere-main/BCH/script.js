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