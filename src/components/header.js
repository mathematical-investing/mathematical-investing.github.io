import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rgba(0,0,0,.1)',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Link
        to="/"
        style={{
          color: '#333',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </div>
  </div>
);

export default Header;
