import React from 'react';

export function Badge({ tone = 'forest', dot = false, children }) {
  return (
    <span className={`badge badge-${tone}`}>
      {dot && <span className="bdot"></span>}
      {children}
    </span>
  );
}

export function Tag({ children, ...rest }) {
  return <span className="tag-pill" {...rest}>{children}</span>;
}
