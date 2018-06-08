import React from 'react';
import Link from 'gatsby-link';
import Section from './section';
import LogoImage from '../img/logo.png';

const Logo = () => (
  <div style={styles.logoWrapper}>
    <img className="logo" src={LogoImage} />
    <h3 style={styles.logoHeader}>Mathematical Investing</h3>
  </div>
)

const Header = ({ siteTitle }) => (
  <Section className="content-section-topbar" style={{ height: '90px', padding: 0 }} noCurve={true}>
    <div className="topbar-container container-inner" style={styles.links}>
      <Logo />
      <div style={styles.linkContainer}>
        <Link to="/">Research & Innovation</Link>
        <Link to="/">Case Studies</Link>
        <Link to="/">Our Team</Link>
        <Link to="/">Investors</Link>
        <Link to="/">Careers</Link>
      </div>
    </div>
  </Section>
);

const styles = {
  logoWrapper: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  logoHeader: {
    color: '#fff',
    whiteSpace: 'nowrap',
    margin: '0 50px 0 2px',
    fontFamily: 'Georgia',
    letterSpacing: '-0.8px',
    fontSize: '25px'
  },
  linkContainer: {
    textAlign: 'right',
    flex: 2
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    padding: '0px 20px'
  }
}

export default Header;
