import React from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';

export default function LocalLink({ children, to, ...props }) {
  return (
    <a
      href="javascript:void(0)"
      onClick={() => {
        const node = document.querySelector(`${to}`);
        scrollIntoView(node, {
          scrollMode: 'if-needed',
          block: 'start',
          behavior: 'smooth'
        });
      }}
      {...props}
    >
      {children}
    </a>
  );
}
