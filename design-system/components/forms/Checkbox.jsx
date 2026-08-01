import React from 'react';

export function Checkbox({ label, ...rest }) {
  return (
    <label className="check">
      <input type="checkbox" {...rest} />
      <span className="box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
      {label}
    </label>
  );
}

export function Radio({ label, ...rest }) {
  return (
    <label className="check radio">
      <input type="radio" {...rest} />
      <span className="box"></span>
      {label}
    </label>
  );
}
