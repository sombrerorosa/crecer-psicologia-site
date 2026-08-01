import React from 'react';

export function Button({ variant = 'primary', size = 'md', icon, loading = false, disabled = false, children, ...rest }) {
  const sizeClass = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : '';
  const cls = ['btn', `btn-${variant}`, sizeClass, loading ? 'is-loading' : '', disabled ? 'is-disabled' : ''].filter(Boolean).join(' ');
  return (
    <button className={cls} disabled={disabled || loading} {...rest}>
      {icon}
      {children}
    </button>
  );
}
