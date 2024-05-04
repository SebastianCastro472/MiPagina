function showSection(sectionId) {
    // Ocultar todas las secciones
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    // Mostrar la sección deseada
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
