// Set current copyright year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', function () {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('is-open');
    document.body.classList.toggle('nav-open', !isExpanded);
  });

  // Close menu when any anchor link inside is clicked
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
      document.body.classList.remove('nav-open');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
      document.body.classList.remove('nav-open');
      navToggle.focus();
    }
  });
}

// WhatsApp Quote Form handler
const formEl = document.getElementById('orcamentoForm');
if (formEl) {
  formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const bairro = document.getElementById('bairro').value.trim();
    const servico = document.getElementById('servico').value.trim();
    const msg = `Olá, meu nome é ${nome}. Vim pelo site da Lavame Plus. Gostaria de um orçamento para ${servico}. Meu bairro é ${bairro}.`;
    window.open(`https://wa.me/5521979511720?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  });
}