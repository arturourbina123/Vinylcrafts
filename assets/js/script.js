// Este script maneja la lógica para el menú desplegable en dispositivos móviles.
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    // Selecciona el menú móvil por su ID
    var mobileMenu = document.getElementById('mobile-menu');
    // Alterna la clase 'hidden' para mostrar u ocultar el menú con una animación
    mobileMenu.classList.toggle('hidden');
});
