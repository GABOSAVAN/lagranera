//funcion para el manejo de los componente del menu
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('ul li a');
  
    function scrollToTarget(targetId) {
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
  
        // Remover la clase 'selected' de todos los elementos
        navItems.forEach(navItem => navItem.classList.remove('selected'));
        // Agregar la clase 'selected' al elemento correspondiente
        const selectedItem = document.querySelector(`.btn a[href="#${targetId}"]`);
        if (selectedItem) {
          selectedItem.classList.add('selected');
        }
  
        // Actualizar la URL en el historial
        history.pushState(null, null, `#${targetId}`);
      }
    }
  
    // Función para detectar la sección visible al cargar la página
    function detectVisibleSection() {
      const scrollPosition = window.scrollY;
      
      // Detectar la posición del scroll y actualizar la clase 'selected'
      navItems.forEach(item => {
        const targetId = item.getAttribute('href').substring(1);
        
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const elementOffset = targetElement.offsetTop;
          const elementHeight = targetElement.offsetHeight;
          const buffer = 5; // Ajusta este valor según sea necesario
  
          if (scrollPosition >= elementOffset - buffer && scrollPosition < elementOffset + elementHeight - buffer) {
            // Remover la clase 'selected' de todos los elementos
            navItems.forEach(navItem => navItem.classList.remove('selected'));
            // Agregar la clase 'selected' al elemento correspondiente
            item.classList.add('selected');
          }
        }
      });
    }
  
    // Llamar a la función para detectar la sección visible al cargar la página
    detectVisibleSection();
    
    navItems.forEach(item => {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToTarget(targetId);
      });
    });
  
    window.addEventListener('scroll', function () {
      // Llamar a la función para detectar la sección visible durante el scroll
      detectVisibleSection();
    });
  
    // Manejar la navegación hacia secciones usando la URL actual
    window.addEventListener('popstate', function () {
      const targetId = window.location.hash.substring(1);
      scrollToTarget(targetId);
    });
  });


  // funcion para ejecutar un cambio de estado de css del boton de menu
  function myFunction() {
      const x = document.getElementById("checkmenu");
      x.checked = false;
  }

  // interception observer para elementos animados del div
  // variable para accedeer a la clase oculta
  const seccionesOcultas = document.querySelectorAll(".section--js div");

  // el observer

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      entry.target.classList.toggle('mostrar', entry.isIntersecting);
    })
  },
  {threshold: 0.3}
  );  

  seccionesOcultas.forEach((seccion)=>observer.observe(seccion));


//   funcion para mostrar/ocultar las redes sociales
  const logo = document.querySelector('.logo');
  const redes = document.querySelector('.redes');

  logo.addEventListener('click', function () {
    // Alternar la clase 'redes-visible' al hacer clic en .logo
    redes.classList.toggle('redes-visible');
  });

  document.addEventListener('DOMContentLoaded', function () {
    var themeCheckbox = document.getElementById('theme');
    var nav = document.querySelector('main .menu');
  
    themeCheckbox.addEventListener('change', function () {
      if (themeCheckbox.checked) {
        nav.classList.add('theme-claro');
      } else {
        nav.classList.remove('theme-claro');
      }
    });
  });