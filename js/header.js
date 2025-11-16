document.addEventListener('DOMContentLoaded', function() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-container').innerHTML = data;
      // Lógica para marcar la sección activa
      const path = window.location.pathname.split('/').pop();
      let seccion = 'index.html';
      if (path.includes('nosotros')) seccion = 'nosotros.html';
      else if (path.includes('carreras')) seccion = 'carreras.html';
      else if (path.includes('contacto')) seccion = 'contacto.html';
      else if (path.includes('comunicacion')) seccion = 'comunicacion.html';
      else if (path.includes('carrerapsocial')) seccion = 'carrerapsocial.html';
      else if (path.includes('carreramarketing')) seccion = 'carreramarketing.html';
      // Quitar active de todos
      document.querySelectorAll('#header-container .nav-item').forEach(function(item){
        item.classList.remove('active');
      });
      // Agregar active al actual
      document.querySelectorAll('#header-container .nav-link').forEach(function(link){
        if(link.getAttribute('href') === seccion){
          link.parentElement.classList.add('active');
        }
      });
    });
}); 