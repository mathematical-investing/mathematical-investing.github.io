import React from 'react';
import Link from 'gatsby-link';
import Section from '../components/section';
import BostonBackground from '../img/boston_blur.jpg';
import { Colors } from '../constants';

/**
 * hero background will be a simple graph, maybe some fading near the bottom
 * 
 */

const Hero = () => (
  <Section style={styles.hero} curveColor={Colors.altPrimary}>
    <div className="container-inner" style={styles.message}>
      <h1 style={styles.header}>Trading <br /> made easy.</h1>
      <p style={styles.paragraph}>Our cloud computing platform was built with simplicity at the forefront, so managing infrastructure is easy, whether your business is running one virtual machine or ten thousand. DigitalOcean gets out of your way so teams can build, deploy, and scale cloud applications faster and more efficiently.</p>
    </div>
  </Section>
);

const styles = {
  hero: {
    // backgroundImage: `url(${BostonBackground})`,
    // backgroundSize: 'cover'
  },
  header: {
    fontSize: '75px',
    marginBottom: '40px'
  },
  paragraph: {
    color: Colors.textSecondary,
  },
  message: {
    maxWidth: '50%'
  }
}

export default Hero;
