import React from 'react';

export function Pullquote({ children, cite }) {
  return (
    <blockquote className="pullquote">
      <p>{children}</p>
      {cite && <cite>{cite}</cite>}
    </blockquote>
  );
}

export function FeatureBand({ title, children, cta }) {
  return (
    <div className="feature-band">
      <h3>{title}</h3>
      {children && <p>{children}</p>}
      {cta}
    </div>
  );
}
