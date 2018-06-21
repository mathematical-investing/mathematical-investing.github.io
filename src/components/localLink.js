import React from 'react';


export default function LocalLink({ children, to, ...props }) {
  return (
    <a
      href="javascript:void(0)"
      onClick={() => {
        document.querySelector(`${to}`).scrollIntoView({
          behavior: 'smooth'
        });
      }}
      {...props}
    >
      {children}
    </a>
  );
}
