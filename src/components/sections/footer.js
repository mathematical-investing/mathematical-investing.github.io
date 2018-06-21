import React from 'react';
import Link from 'gatsby-link';
import Section from '../section';
import { Colors } from '../../constants';
import IconEarth from '../../img/icons/earth.png';
import IconGraph from '../../img/icons/graph.png';
import IconMath from '../../img/icons/math.png';

const t1 = {
  background: 'linear-gradient(48deg, #fe75b6 25%, #fbcc6b 100%)'
}
// backgroundImage: `url(${BostonBackground})`,
const t2 = {
  background: 'linear-gradient(48deg, #0ede9a 40%, #07f5f1 100%)'
}

const t3 = {
  background: 'linear-gradient(48deg, #bf8dfc 35%, #30d9e7 100%)'
}

function Icon({ theme = {}, icon, ...props }) {
  return (
    <div className="card-icon" style={{
      ...theme,
      backgroundImage: `url(${icon})`
    }}>
    </div>
  );
}

function Card({ title, theme, icon, children, style, ...props }) {
  return (
    <div className="content-card" style={{ ...style, ...theme }}>
      <Icon icon={icon} />
      <h3 style={styles.cardHeader}>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

const Footer = () => (
  <Section id="research-and-innovation" noCurve={true}>
    <div className="container-inner" style={styles.content}>
      footer
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
    textAlign: 'center',
    fontSize: '14px',
    margin: '0 auto',
    opacity: 0.5,
    maxWidth: '960px',
  }
}

export default Footer;
