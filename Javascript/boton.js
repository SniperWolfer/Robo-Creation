// Función para detectar la página actual y seleccionar el valor correspondiente
function setChapterSelect() {
    const currentPage = window.location.pathname.split("/").pop(); // Obtener el nombre de la página actual
    const selectElement = document.getElementById("chapterSelect");
    
    // Establece la opción seleccionada en función de la página actual
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === currentPage) {
            selectElement.selectedIndex = i;
            break;
        }
    }
}

// Función para cambiar de página al seleccionar una opción en el menú desplegable
function navigateToPage() {
    const selectElement = document.getElementById("chapterSelect");
    const selectedPage = selectElement.value;
    window.location.href = selectedPage;
}

// Configuración inicial cuando se carga la página
window.addEventListener('load', () => {
    setChapterSelect();
    document.getElementById("chapterSelect").addEventListener('change', navigateToPage);
});