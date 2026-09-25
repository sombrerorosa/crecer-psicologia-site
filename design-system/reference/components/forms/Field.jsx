import React from 'react';

export function Field({ label, hint, error, valid, required, children }) {
  const state = error ? 'is-error' : valid ? 'is-valid' : '';
  return (
    <div className={`field ${state}`}>
      {label && <label>{label}{required && <span className="req"> *</span>}</label>}
      {children}
      {hint && !error && <div className="hint">{hint}</div>}
      {error && <div className="field-msg err"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v5M12 16h.01"/></svg>{error}</div>}
      {valid && !error && <div className="field-msg ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>Correcto</div>}
    </div>
  );
}

export function Input(props) { return <input className="input" {...props} />; }
export function Textarea(props) { return <textarea className="textarea" {...props} />; }
export function Select({ children, ...rest }) { return <select className="select" {...rest}>{children}</select>; }
