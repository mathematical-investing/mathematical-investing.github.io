import React from 'react';
import Section from '../section';
import LogoImage from '../../img/logo.png';
import { Colors } from '../../constants';

function FlexDiv({ children, flex, style, ...props }) {
  return (
    <div
      className="footer-section"
      style={{
        ...style,
        flex
      }}
      {...props}
    >
      {children}
    </div>
  );
}

const Footer = () => (
  <Section id="research-and-innovation" noCurve={true}>
    <div className="container-inner" style={styles.content}>
      <FlexDiv flex={2}>
        <img className="logo-footer" src={LogoImage} />
        <p>© 2018 Mathematical Investments<br />All rights reserved.</p>
        <p>asd</p>
      </FlexDiv>

      <FlexDiv flex={1}>
        <h6>Company</h6>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
      </FlexDiv>

      <FlexDiv flex={1}>
        <h6>Resources</h6>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
      </FlexDiv>

      <FlexDiv flex={1}>
        <h6>Support</h6>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
      </FlexDiv>

      <FlexDiv flex={1}>
        <h6>Extra</h6>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
      </FlexDiv>

    </div>
  </Section>
);

const styles = {
  cardHeader: {
    fontSize: '20px',
    fontWeight: '500',
    margin: '24px 0 12px',
    textAlign: 'center',
    width: '100%'
  },
  bottomRight: {
    marginLeft: '15px'
  },
  topRight: {
    marginBottom: '80px'
  },
  paragraph: {
    maxWidth: '90%',
    color: Colors.textSecondary,
    marginBottom: '60px'
  },
  content: {
    display: 'flex',
    textAlign: 'left',
    fontSize: '14px',
    margin: '0 auto',
    maxWidth: '960px',
  }
}

export default Footer;
