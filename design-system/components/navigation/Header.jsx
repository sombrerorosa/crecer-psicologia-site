import React from 'react';

export function Header({ logo = '../../assets/crecer-horizontal-positivo.svg', name = 'Crecer Psicología', links = [], activeHref }) {
  return (
    <header className="site-header">
      <div className="brand">
        <img src={logo} alt={name} />
      </div>
      <nav className="site-nav">
        {links.map(l => (
          <a key={l.href} href={l.href} className={l.href === activeHref ? 'active' : ''}>{l.label}</a>
        ))}
      </nav>
      <button className="hamburger" aria-label="Menú"><span></span><span></span><span></span></button>
    </header>
  );
}
