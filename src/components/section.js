import React from 'react';
import Link from 'gatsby-link';
import { Colors } from '../constants';

const Container = ({ className, style, children }) => (
  <div className={className} style={style}>
    {children}
  </div>
);

const CurveComponent = (props) => (
  <div className="svg-curve-container">
    <CurveSVG {...props} />
  </div>
);

const CurveSVG = ({ color, ...props }) => (
  <svg preserveAspectRatio="none" width="54" height="14" viewBox="0 0 54 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path fill={color || Colors.primary} d="M 27 4C 21 2 14 0 0 0L 0 14L 54 14L 54 11C 40 11 33 6 27 4Z"></path>
  </svg>
);

const SlantedSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
    <polygon fill="white" points="0,100 100,0 100,100" />
  </svg>
)

const Section = ({ style, bg, curveColor, noCurve, children }) => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Outer wrapper container */}
      <Container className="section-outer" style={{
        ...style,
        background: bg
      }}>
        {/* Inner body container */}
        <Container className="section-inner">
          {children}
        </Container>
      </Container>
      {!noCurve
        ? <CurveComponent color={curveColor} />
        : null}
    </div>
  )
};

export default Section;
