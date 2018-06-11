import React from 'react';
import Link from 'gatsby-link';
import Section from '../section';
import { Colors } from '../../constants';

const t1 = {
  background: 'linear-gradient(48deg, #fe75b6 25%, #fbcc6b 100%)',
  width: '40%',
  marginRight: '5%'
}

const t2 = {
  background: 'linear-gradient(48deg, #0ede9a 40%, #07f5f1 100%)',
  width: '55%',
  marginBottom: '5%'
}

const t3 = {
  background: 'linear-gradient(48deg, #bf8dfc 35%, #30d9e7 100%)',
  width: '70%',
  marginRight: '5%'
}

const t5 = {
  background: 'linear-gradient(48deg, #f7d453 15%, rgb(255, 205, 182) 100%)',
  width: '25%'
}

const t4 = {
  background: 'linear-gradient(48deg, #dc567e 40%, #f499a2 100%)',
  width: '55%',
  marginLeft: '5%'
}

const t6 = {
  background: 'linear-gradient(48deg, #3c61c8 20%, #2dc8e6 100%)',
  width: '35%',
  marginLeft: '5%'
}


function Card({ title, children, style, theme, ...props }) {
  return (
    <div
      className="case-study-cards"
      style={{
        ...styles.card,
        ...style,
        ...theme
      }}>
      <h3 style={styles.cardHeader}>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

const CaseStudies = () => (
  <Section curveColor={Colors.altPrimary}>
    <div className="container-inner" style={styles.content}>
      <Card title="Pure Mathematics" theme={t1} />
      <Card title="Pure Mathematics" theme={t2} />

      <Card title="Data Analytics" theme={t3} />
      <Card title="Data Analytics" theme={t5} />
    </div>

    <div className="container-inner" style={styles.content}>
      <div style={styles.headerContainer}>
        <h2 style={styles.header}>Case Studies</h2>
        <p style={styles.paragraph}>He cases them, she studies them, and just let us handle the rest.</p>
      </div>

      <Card title="Geopolotics" theme={t4} />
      <Card title="Geopolotics" theme={t6} />
    </div>
  </Section>
);

const styles = {
  cardHeader: {
    fontSize: '20px',
    fontWeight: '500',
    margin: '8px',
    textAlign: 'center',
    width: '100%'
  },
  bottomRight: {
    marginLeft: '-30px'
  },
  topLeft: {
    marginBottom: '40px'
  },
  headerContainer: {
    height: '150px',
    margin: '0',
    marginLeft: '5%',
    marginBottom: '5%',
  },
  header: {
    textAlign: 'center'
  },
  paragraph: {
    textAlign: 'center',
    maxWidth: '90%',
    color: Colors.textSecondary
  },
  content: {
    textAlign: 'left',
    margin: '0 auto',
    maxWidth: '960px'
  },
  card: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    verticalAlign: 'top',
    width: '75%',
    height: '150px',
    borderRadius: '5px',
    boxShadow: '0 2px 6px rgba(16, 19, 27, 0.24)',
    background: '#262e47',
    margin: '0',
    padding: '12px',
    textAlign: 'center'
  }
}

export default CaseStudies;
