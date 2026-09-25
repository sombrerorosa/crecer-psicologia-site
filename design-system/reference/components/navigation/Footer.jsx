import React from 'react';

export function Footer({ logo = null /* sin versión negativa aún: no usar el símbolo sobre slate */, name = 'Crecer Psicología', tagline, columns = [], bottom }) {
  return (
    <footer className="site-footer">
      <div className="ft-top">
        <div className="ft-brand">
          {logo && <img src={logo} alt={name} />}
          <div className="nm">{name}</div>
          {tagline && <p>{tagline}</p>}
        </div>
        {columns.map(col => (
          <div className="ft-col" key={col.title}>
            <h5>{col.title}</h5>
            {col.links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>
        ))}
      </div>
      <div className="ft-bottom">{bottom}</div>
    </footer>
  );
}
