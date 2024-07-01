//Cuando cargue el contenido de la página se va a ejecutar la función
document.addEventListener('DOMContentLoaded', function() {
    const menu_toggle = document.getElementById('menu-toggle'); //Obtiene el elemento HTML con el ID y lo guarda en la constante
    const navLinks = document.getElementById('nav-links');

    menu_toggle.addEventListener('click', function() {
        navLinks.classList.toggle('active'); //Revisa la lista de elementos que tiene el elemento nav-links, si tiene la clase active, la elimina, de lo contrario lo agrega
    });

});
