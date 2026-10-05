/**
 * INVER LA GRANERA C.A. - Main Interactive Controller
 * Modern B2B Landing Page Logic
 */

// Product catalog database for quick-view modal and quote integration
const PRODUCTS_DATA = {
  'pellet': {
    id: 'pellet',
    name: 'Pellets de madera de Pino Caribe',
    category: 'Madera & Biomasa',
    categoryClass: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
    image: './assets/pellet.webp',
    tagline: 'Biocombustible ecológico de alta densidad energética y bajo residuo.',
    description: 'Nuestros pellets de madera de Pino Caribe son elaborados con subproductos forestales seleccionados y prensados bajo rigurosos controles de calidad. Cuentan con un poder calorífico superior a 4.8 kWh/kg, humedad controlada menor al 8% y bajo contenido de cenizas (<0.7%), asegurando una combustión eficiente y amigable con el medio ambiente.',
    specs: [
      { label: 'Poder calorífico', value: '> 4.8 kWh/kg (4150 kcal/kg)' },
      { label: 'Humedad', value: '< 8%' },
      { label: 'Contenido de ceniza', value: '< 0.7%' },
      { label: 'Diámetro estándar', value: '6 mm - 8 mm' },
      { label: 'Presentación', value: 'Sacos de 15 kg, Big Bags de 1000 kg o Granel' },
      { label: 'Aplicación', value: 'Calderas industriales, calefacción y energía' }
    ]
  },
  'fertilizantes': {
    id: 'fertilizantes',
    name: 'Fertilizantes Hidrogenados y con Sulfato de Potasio',
    category: 'Fertilizantes & Nutrición',
    categoryClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
    image: './assets/fertilizantes.jpg',
    tagline: 'Fórmulas agrícolas de alta asimilación para máxima productividad.',
    description: 'Combinaciones avanzadas de nutrientes con base hidrogenada y enriquecidas con Sulfato de Potasio. Diseñadas para proporcionar una fertilización balanceada que estimula el desarrollo vegetativo, fortalece la resistencia radicular ante estrés hídrico y optimiza el llenado y calidad de cosechas en cultivos comerciales exigentes.',
    specs: [
      { label: 'Composición', value: 'Formulación NPK balanceada con K2SO4' },
      { label: 'Solubilidad', value: 'Alta solubilidad y absorción foliar/radicular' },
      { label: 'Índice salino', value: 'Bajo (seguro para suelos sensibles)' },
      { label: 'Cultivos', value: 'Frutales, hortalizas, cereales, palma y café' },
      { label: 'Presentación', value: 'Sacos multicapa de 25 kg y 50 kg' },
      { label: 'Origen', value: 'Fabricación nacional certificada para exportación' }
    ]
  },
  'calcio': {
    id: 'calcio',
    name: 'Sulfato de Calcio',
    category: 'Minerales & Suelo',
    categoryClass: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',
    image: './assets/calcium sulfate.jpg',
    tagline: 'Enmienda mineral natural (Yeso agrícola) acondicionadora de suelos.',
    description: 'El Sulfato de Calcio (CaSO4·2H2O) es una fuente altamente soluble de Calcio y Azufre biodisponibles. Actúa como el mejorador de suelos por excelencia: descompacta suelos arcillosos, neutraliza la toxicidad del aluminio en profundidad y desplaza el exceso de sodio en suelos salino-sódicos.',
    specs: [
      { label: 'Pureza mínima', value: 'CaSO4·2H2O > 90%' },
      { label: 'Calcio (Ca)', value: 'Aprox. 20% - 22%' },
      { label: 'Azufre (S)', value: 'Aprox. 16% - 18%' },
      { label: 'Granulometría', value: 'Polvo micronizado (malla 100) y granular' },
      { label: 'Presentación', value: 'Sacos de 50 kg, Big Bags de 1 TM o Granel' },
      { label: 'Certificación', value: 'Apto para agricultura orgánica y convencional' }
    ]
  },
  'potasio': {
    id: 'potasio',
    name: 'Sulfato de Potasio',
    category: 'Fertilizantes & Nutrición',
    categoryClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
    image: './assets/potassium sulfate.jpg',
    tagline: 'Fertilizante potásico premium 100% libre de cloro (SOP).',
    description: 'El Sulfato de Potasio (SOP, K2SO4) aporta una concentración superior de potasio y azufre sin el contenido de cloruros perjudicial para cultivos sensibles. Incrementa el contenido de azúcares, el calibre de frutos, la vida útil postcosecha y la resistencia contra enfermedades.',
    specs: [
      { label: 'Óxido de Potasio (K2O)', value: 'Mínimo 50% - 52%' },
      { label: 'Azufre (S)', value: 'Aprox. 17% - 18%' },
      { label: 'Cloro (Cl)', value: '< 1% (Libre de cloruro)' },
      { label: 'Solubilidad', value: 'Apto para fertirriego y aplicación directa' },
      { label: 'Presentación', value: 'Sacos de 25 kg y 50 kg' },
      { label: 'Uso ideal', value: 'Tabaco, cítricos, vid, tomate, hortalizas' }
    ]
  },
  'carbon': {
    id: 'carbon',
    name: 'Carbón Vegetal',
    category: 'Madera & Biomasa',
    categoryClass: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
    image: './assets/carbon1.jpg',
    tagline: 'Carbón vegetal seleccionado de maderas duras de combustión prolongada.',
    description: 'Carbón vegetal de primera calidad producido mediante procesos tradicionales y tecnificados de pirolisis controlada. Proviene de especies de madera densa que garantizan un encendido uniforme, chispas mínimas, ausencia de olores desagradables y un rendimiento térmico sobresaliente.',
    specs: [
      { label: 'Carbono fijo', value: '> 75%' },
      { label: 'Humedad', value: '< 6%' },
      { label: 'Cenizas volátiles', value: '< 4%' },
      { label: 'Poder calorífico', value: '> 7200 kcal/kg' },
      { label: 'Presentación', value: 'Bolsas de 3, 5, 10, 15 kg y Sacos a granel' },
      { label: 'Mercados', value: 'Restaurantes, asadores, distribución minorista y exportación' }
    ]
  },
  'briqueta': {
    id: 'briqueta',
    name: 'Briqueta de carbón vegetal',
    category: 'Madera & Biomasa',
    categoryClass: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
    image: './assets/carbon2.jpg',
    tagline: 'Biocombustible compacto de calor sostenido y uniforme.',
    description: 'Briquetas elaboradas con finos de carbón vegetal aglomerados con almidón vegetal natural, sin químicos ni derivados del petróleo. Su forma geométrica homogénea permite una distribución simétrica del calor y una duración en brasa hasta 3 veces mayor que el carbón convencional.',
    specs: [
      { label: 'Duración de brasa', value: '3 a 4 horas continuas' },
      { label: 'Temperatura', value: 'Calor constante y sostenido' },
      { label: 'Aglutinante', value: '100% orgánico (almidón vegetal)' },
      { label: 'Humo y chispas', value: 'Nivel prácticamente nulo' },
      { label: 'Presentación', value: 'Cajas de 4 kg y 10 kg, Pallets de exportación' },
      { label: 'Aplicación', value: 'Parrillas comerciales, cocción lenta y hostelería' }
    ]
  },
  'leonardita': {
    id: 'leonardita',
    name: 'Leonardita',
    category: 'Minerales & Suelo',
    categoryClass: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',
    image: './assets/leo1.jpg',
    tagline: 'Fuente natural de ácidos húmicos y fúlvicos para regeneración biológica.',
    description: 'La Leonardita es una sustancia húmica mineralizada fósil de origen vegetal. Representa la mayor concentración natural de ácidos húmicos y fúlvicos disponible. Aumenta drásticamente la capacidad de intercambio catiónico (CIC), mejora la retención de agua y desbloquea minerales retenidos en el suelo.',
    specs: [
      { label: 'Extracto Húmico Total', value: '> 65% - 70%' },
      { label: 'Ácidos Húmicos', value: '> 50%' },
      { label: 'Ácidos Fúlvicos', value: '> 15%' },
      { label: 'Materia orgánica', value: '> 75%' },
      { label: 'Granulometría', value: 'Granular (2-4 mm) y Polvo micronizado' },
      { label: 'Presentación', value: 'Sacos de 25 kg y Big Bags de 1000 kg' }
    ]
  },
  'caliza': {
    id: 'caliza',
    name: 'Piedra Caliza',
    category: 'Minerales & Suelo',
    categoryClass: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',
    image: './assets/caliza.jpeg',
    tagline: 'Carbonato de calcio de alta pureza para enmiendas agrícolas e industria.',
    description: 'Roca sedimentaria compuesta predominantemente por Carbonato de Calcio (CaCO3) extraída y seleccionada con estrictos estándares de pureza. Utilizada como cal agrícola para corregir la acidez del suelo, elevar el pH a niveles óptimos y aportar calcio estructural para el cultivo.',
    specs: [
      { label: 'Carbonato de Calcio (CaCO3)', value: '> 92% - 95%' },
      { label: 'Poder de Neutralización (PRNT)', value: '> 85%' },
      { label: 'Calcio Elemental (Ca)', value: 'Aprox. 36% - 38%' },
      { label: 'Granulometría', value: 'Cal agrícola fina, mallas personalizadas' },
      { label: 'Presentación', value: 'Granel y Sacos de 40 kg o 50 kg' },
      { label: 'Aplicaciones', value: 'Agrícola (corrección de pH), alimento animal, industria' }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initProductFilters();
  initProductModal();
  initQuickQuote();
  initScrollSpy();
  initBackToTop();
});

/**
 * 1. Dark Mode / Theme Toggle
 * Follows modern web guidance with localStorage persistence and system sync.
 */
function initThemeToggle() {
  const themeToggleButtons = document.querySelectorAll('.theme-toggle-btn');
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      if (metaColorScheme) metaColorScheme.content = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      if (metaColorScheme) metaColorScheme.content = 'light';
      localStorage.setItem('theme', 'light');
    }
  }

  themeToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      applyTheme(!isDark);
    });
  });

  // Listen to OS theme changes if user has not explicitly set a preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches);
    }
  });
}

/**
 * 2. Mobile Menu Drawer Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    drawer.classList.remove('-translate-x-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.add('-translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/**
 * 3. Product Catalog Filter
 */
function initProductFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (!filterButtons.length || !productCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;

      // Update button active state
      filterButtons.forEach(b => {
        b.classList.remove('bg-brand-500', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
      });

      btn.classList.add('bg-brand-500', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');

      // Filter products with subtle scale/fade
      productCards.forEach(card => {
        const productCategory = card.dataset.category;
        if (category === 'all' || productCategory === category) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.classList.remove('opacity-0', 'scale-95');
            card.classList.add('opacity-100', 'scale-100');
          }, 10);
        } else {
          card.classList.add('opacity-0', 'scale-95');
          card.classList.remove('opacity-100', 'scale-100');
          setTimeout(() => {
            card.classList.add('hidden');
          }, 200);
        }
      });
    });
  });
}

/**
 * 4. Product Quick View Modal
 */
function initProductModal() {
  const modal = document.getElementById('product-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalClose = document.getElementById('modal-close');
  const modalContainer = document.getElementById('modal-container');
  const detailButtons = document.querySelectorAll('.open-product-modal');

  if (!modal) return;

  function openModal(productId) {
    const product = PRODUCTS_DATA[productId];
    if (!product) return;

    // Fill modal fields
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-tagline').textContent = product.tagline;
    document.getElementById('modal-desc').textContent = product.description;
    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-img').alt = product.name;

    const catBadge = document.getElementById('modal-category');
    catBadge.textContent = product.category;
    catBadge.className = `inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${product.categoryClass}`;

    // Render specs table
    const specsList = document.getElementById('modal-specs');
    specsList.innerHTML = '';
    product.specs.forEach(spec => {
      const row = document.createElement('div');
      row.className = 'flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/80 text-sm';
      row.innerHTML = `
        <span class="text-slate-500 dark:text-slate-400 font-medium">${spec.label}:</span>
        <span class="text-slate-800 dark:text-slate-200 font-semibold text-right">${spec.value}</span>
      `;
      specsList.appendChild(row);
    });

    // Update quote button in modal
    const modalQuoteBtn = document.getElementById('modal-quote-btn');
    const modalWaBtn = document.getElementById('modal-wa-btn');

    if (modalQuoteBtn) {
      modalQuoteBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
        prefillContactForm(product.name);
      };
    }

    if (modalWaBtn) {
      const waText = encodeURIComponent(`Hola Inver La Granera, deseo información y cotización sobre: ${product.name}`);
      modalWaBtn.href = `https://wa.me/584244200338?text=${waText}`;
      modalWaBtn.onclick = () => {
        closeModal();
      };
    }

    // Show modal & enable interactions
    modal.classList.remove('hidden');
    modal.classList.remove('pointer-events-none');
    document.body.style.overflow = 'hidden';
    
    // Trigger entrance animation
    requestAnimationFrame(() => {
      modal.classList.remove('opacity-0');
      if (modalContainer) modalContainer.classList.remove('scale-95');
    });
  }

  function closeModal() {
    document.body.style.overflow = '';
    modal.classList.add('opacity-0');
    modal.classList.add('pointer-events-none');
    if (modalContainer) modalContainer.classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 250);
  }

  // Bind open modal buttons on cards
  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const prodId = btn.dataset.productId;
      openModal(prodId);
    });
  });

  // Bind close on 'X' button
  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  }

  // Bind close on backdrop click
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  }

  // Bind close on outer modal click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Prevent clicks inside modal content from bubbling to backdrop
  if (modalContainer) {
    modalContainer.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  // Close with Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

/**
 * 5. Quick Quote Buttons
 * Prefills contact form and scrolls smoothly to the contact section.
 */
function initQuickQuote() {
  const quoteButtons = document.querySelectorAll('.quote-product-btn');
  quoteButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const productName = btn.dataset.productName;
      prefillContactForm(productName);
    });
  });
}

function prefillContactForm(productName) {
  const contactSection = document.getElementById('contacto');
  const subjectInput = document.getElementById('form-subject');
  const commentsInput = document.getElementById('form-comments');
  const productSelect = document.getElementById('form-product');

  if (contactSection) {
    setTimeout(() => {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }

  if (subjectInput) {
    subjectInput.value = `Cotización: ${productName}`;
  }

  if (productSelect) {
    for (let i = 0; i < productSelect.options.length; i++) {
      if (productSelect.options[i].text.includes(productName) || productSelect.options[i].value.includes(productName)) {
        productSelect.selectedIndex = i;
        break;
      }
    }
  }

  if (commentsInput) {
    commentsInput.value = `Hola equipo de Inver La Granera, requiero cotización y disponibilidad para exportación/distribución de: ${productName}.\n\nCantidad estimada:\nDestino:`;
    setTimeout(() => {
      commentsInput.focus();
    }, 350);
  }
}

/**
 * 6. ScrollSpy for Sticky Navbar
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-desktop-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-brand-500', 'font-bold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-brand-500', 'font-bold');
      }
    });
  }, { passive: true });
}

/**
 * 7. Back To Top Floating Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}