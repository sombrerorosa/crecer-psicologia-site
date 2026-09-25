import React from 'react';

export function Toggle({ label, ...rest }) {
  return (
    <label className="toggle">
      <input type="checkbox" {...rest} />
      <span className="track"></span>
      {label}
    </label>
  );
}
