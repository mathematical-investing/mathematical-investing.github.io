import React from 'react';
import Link from 'gatsby-link';

const Container = ({ style, children }) => (
  <div style={{ style }}>
    {children}
  </div>
);

const Section = ({ children }) => (
  /* Outer wrapper container */
  <Container
    style={{
      background: 'rgba(0,0,0,.1)',
      marginBottom: '1.45rem',
    }}
  >
    {/* Inner body container */}
    <Container
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      {children}
    </Container>
  </Container>
);

export default Section;
