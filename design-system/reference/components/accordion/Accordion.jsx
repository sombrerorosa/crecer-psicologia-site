import React, { useState, useRef } from 'react';

function AccItem({ title, children, open, onToggle }) {
  const ref = useRef(null);
  return (
    <div className={`acc-item ${open ? 'open' : ''}`}>
      <button className="acc-head" onClick={onToggle}>
        {title}
        <span className="acc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
      </button>
      <div className="acc-panel" style={{ maxHeight: open ? (ref.current ? ref.current.scrollHeight + 40 : 400) : 0 }}>
        <div className="acc-panel-inner" ref={ref}>{children}</div>
      </div>
    </div>
  );
}

export function Accordion({ items, defaultOpenIndex = -1 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  return (
    <div className="accordion">
      {items.map((it, i) => (
        <AccItem key={i} title={it.title} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}>
          {it.content}
        </AccItem>
      ))}
    </div>
  );
}
