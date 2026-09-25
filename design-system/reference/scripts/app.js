/* ============================================================
   CRECER PSICOLOGÍA — Design System · interactividad + datos
   ============================================================ */

/* ---------- Iconografía (line icons, trazo 1.6, estilo Feather) ---------- */
const ICONS = {
  leaf:        '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
  heart:       '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  users:       '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  user:        '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  message:     '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/>',
  sun:         '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  shield:      '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  calendar:    '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  video:       '<path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  clock:       '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  phone:       '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>',
  mail:        '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>',
  pin:         '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  compass:     '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z"/>',
  smile:       '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/>',
  anchor:      '<circle cx="12" cy="5" r="3"/><path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3"/>',
  feather:     '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76Z"/><path d="M16 8 2 22M17.5 15H9"/>',
  book:        '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z"/>',
  headphones:  '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  sprout:      '<path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8ZM14.1 6c-.9 1-1.5 2.2-1.7 3.6-.1 1 0 2.2.4 3.4 1.9-.5 3.1-1.6 3.7-2.9.6-1.5.5-3.4-.3-5.3-1 .1-1.6.4-2.1 1.2Z"/>',
  check:       '<path d="M20 6 9 17l-5-5"/>',
  chevron:     '<path d="m6 9 6 6 6-6"/>',
  arrow:       '<path d="M5 12h14M12 5l7 7-7 7"/>',
  alert:       '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
  star:        '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/>',
};
function icon(name, cls) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"${cls ? ' class="' + cls + '"' : ''}>${ICONS[name] || ''}</svg>`;
}
window.icon = icon;

/* ---------- Paleta ---------- */
const PALETTE = [
  { nm: 'Crema',          hex: '#F6F1EE', role: 'Fondo de página (bg) en todas las direcciones' },
  { nm: 'Slate',          hex: '#142531', role: 'Texto principal y bloques profundos: footer, banda, testimonio' },
  { nm: 'Mauve CTA',      hex: '#906062', role: 'Botones primarios, badges, controles activos' },
  { nm: 'Mauve profundo', hex: '#7F5456', role: 'Hover de CTA, texto mauve sobre blush' },
  { nm: 'Mauve acento',   hex: '#A47678', role: 'Solo decorativo: borde de citas, subrayado activo' },
  { nm: 'Blush',          hex: '#E4D7D0', role: 'Superficies suaves y detalles sobre slate' },
  { nm: 'Texto medio',    hex: '#4A5A66', role: 'Texto secundario' },
  { nm: 'Muted',          hex: '#8C979F', role: 'Placeholders y deshabilitado' },
  { nm: 'Blanco cálido',  hex: '#FDFBFA', role: 'Superficies claras, texto sobre mauve o slate' },
];

const ICON_SET = ['sprout','leaf','heart','users','user','message','sun','shield','calendar','video','clock','phone','mail','pin','compass','smile','anchor','feather','book','headphones'];

/* ---------- Render dinámico ---------- */
function renderSwatches() {
  const el = document.getElementById('swatchGrid');
  if (!el) return;
  el.innerHTML = PALETTE.map(c => `
    <div class="swatch" data-copy="${c.hex}">
      <div class="chip-color" style="background:${c.hex}"></div>
      <div class="meta">
        <div class="nm">${c.nm}</div>
        <div class="role">${c.role}</div>
        <div class="hex"><svg class="copy-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>${c.hex.toUpperCase()}</div>
      </div>
    </div>`).join('');
}
function renderIcons() {
  const el = document.getElementById('iconGrid');
  if (!el) return;
  el.innerHTML = ICON_SET.map(n => `<div class="icon-cell">${icon(n)}<span class="ic-name">${n}</span></div>`).join('');
}

/* ---------- Click para copiar ---------- */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1700);
}
function bindCopy() {
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-copy]');
    if (!el) return;
    const val = el.getAttribute('data-copy');
    navigator.clipboard?.writeText(val).catch(() => {});
    showToast(val + ' copiado');
  });
}

/* ---------- Switcher de dirección ---------- */
function initDirection() {
  const saved = localStorage.getItem('cp-dir') || 'calida';
  setDirection(saved);
  document.querySelectorAll('[data-set-dir]').forEach(b => {
    b.addEventListener('click', () => setDirection(b.getAttribute('data-set-dir')));
  });
}
function setDirection(dir) {
  document.documentElement.setAttribute('data-dir', dir);
  localStorage.setItem('cp-dir', dir);
  document.querySelectorAll('[data-set-dir]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-set-dir') === dir);
  });
}

/* ---------- Scrollspy nav ---------- */
function initScrollspy() {
  const links = [...document.querySelectorAll('.sb-link[data-target]')];
  const map = new Map();
  links.forEach(l => { const s = document.getElementById(l.dataset.target); if (s) map.set(s, l); });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        map.get(en.target)?.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
  map.forEach((_, s) => obs.observe(s));
  links.forEach(l => l.addEventListener('click', () => {
    const s = document.getElementById(l.dataset.target);
    s?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
}

/* ---------- Acordeón ---------- */
function initAccordion() {
  document.querySelectorAll('.acc-head').forEach(head => {
    head.addEventListener('click', () => {
      const item = head.closest('.acc-item');
      const panel = item.querySelector('.acc-panel');
      const open = item.classList.contains('open');
      // cerrar hermanos (single-open) dentro del mismo acordeón
      item.closest('.accordion').querySelectorAll('.acc-item.open').forEach(o => {
        if (o !== item) { o.classList.remove('open'); o.querySelector('.acc-panel').style.maxHeight = null; }
      });
      if (open) { item.classList.remove('open'); panel.style.maxHeight = null; }
      else { item.classList.add('open'); panel.style.maxHeight = panel.scrollHeight + 'px'; }
    });
  });
}

/* ---------- Botones demo de estado loading ---------- */
function initLoadingBtns() {
  document.querySelectorAll('[data-loading-demo]').forEach(b => {
    b.addEventListener('click', () => {
      if (b.classList.contains('is-loading')) return;
      const label = b.dataset.label || b.textContent;
      b.classList.add('is-loading');
      setTimeout(() => { b.classList.remove('is-loading'); showToast('Acción completada'); }, 1600);
    });
  });
}

/* ---------- Validación de formulario ---------- */
function initForm() {
  const form = document.getElementById('demoForm');
  if (!form) return;
  const setState = (field, state, msg) => {
    field.classList.remove('is-error', 'is-valid');
    if (state) field.classList.add(state === 'error' ? 'is-error' : 'is-valid');
    const errEl = field.querySelector('.field-msg.err .m');
    if (errEl && msg) errEl.textContent = msg;
  };
  const validators = {
    nombre: v => v.trim().length >= 2 || 'Ingresá tu nombre completo.',
    email: v => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.trim()) || 'Ingresá un email válido.',
    motivo: v => !!v || 'Elegí una opción.',
    mensaje: v => v.trim().length >= 10 || 'Contanos un poco más (mín. 10 caracteres).',
  };
  const validate = (name) => {
    const field = form.querySelector(`[data-field="${name}"]`);
    const input = form.querySelector(`[name="${name}"]`);
    if (!field || !input) return true;
    const res = validators[name](input.value);
    if (res === true) { setState(field, 'valid'); return true; }
    setState(field, 'error', res); return false;
  };
  form.querySelectorAll('[name]').forEach(inp => {
    inp.addEventListener('blur', () => validate(inp.name));
    inp.addEventListener('input', () => {
      const field = inp.closest('[data-field]');
      if (field && field.classList.contains('is-error')) validate(inp.name);
    });
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = ['nombre','email','motivo','mensaje'].map(validate).every(Boolean);
    if (!ok) { showToast('Revisá los campos marcados'); return; }
    const btn = form.querySelector('button[type="submit"]');
    btn.classList.add('is-loading');
    setTimeout(() => {
      btn.classList.remove('is-loading');
      form.reset();
      form.querySelectorAll('[data-field]').forEach(f => f.classList.remove('is-valid','is-error'));
      showToast('¡Gracias! Te contactaremos pronto.');
    }, 1600);
  });
}

/* ---------- Menú mobile (header demo) ---------- */
function initMobileMenu() {
  document.querySelectorAll('[data-hamburger]').forEach(h => {
    h.addEventListener('click', () => showToast('Menú móvil (demo)'));
  });
}

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderSwatches();
  renderIcons();
  bindCopy();
  initDirection();
  initScrollspy();
  initAccordion();
  initLoadingBtns();
  initForm();
  initMobileMenu();
});
