import React from 'react';

export function Card({ variant = 'default', hoverable = false, icon, title, description, media, role, meta, quote, author, authorMeta, children }) {
  const cls = ['card', variant !== 'default' ? `card-${variant}` : '', hoverable ? 'hover' : ''].filter(Boolean).join(' ');

  if (variant === 'quote') {
    return (
      <div className={cls}>
        <div className="card-body">
          <div className="qmark">&#8220;</div>
          <p>{quote}</p>
          <div className="author">
            {author && <div><div className="nm">{author}</div>{authorMeta && <div className="mt">{authorMeta}</div>}</div>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cls}>
      {media && <div className="card-media">{media}</div>}
      <div className="card-body">
        {icon && <div className="card-icon">{icon}</div>}
        {title && <h4>{title}</h4>}
        {variant === 'team' && role && <div className="role">{role}</div>}
        {description && <p>{description}</p>}
        {variant === 'team' && meta && <div className="meta">{meta}</div>}
        {children}
      </div>
    </div>
  );
}
