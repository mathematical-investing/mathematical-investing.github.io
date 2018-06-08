import React from 'react';
import Link from 'gatsby-link';
import Section from '../section';
import { Colors } from '../../constants';

const t1 = {
  background: 'linear-gradient(48deg, #fe75b6 25%, #fbcc6b 100%)'
}

const t2 = {
  background: 'linear-gradient(48deg, #0ede9a 40%, #07f5f1 100%)'
}

const t3 = {
  background: 'linear-gradient(48deg, #bf8dfc 35%, #30d9e7 100%)'
}

function Icon({ theme, ...props }) {
  return (
    <div className="card-icon" style={theme}>
    </div>
  );
}

function Card({ title, theme, children, style, ...props }) {
  return (
    <div className="content-card" style={style}>
      <Icon theme={theme} />
      <h3 style={styles.cardHeader}>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

const ResearchAndInnovation = () => (
  <Section bg={Colors.altPrimary}>
    <div className="container-inner" style={styles.content}>
      <h2 style={styles.header}>Research & Innovation</h2>
      <p style={styles.paragraph}>Our easy-to-use control panel and API let you spend more time coding and less time managing your infrastructure.</p>

      <Card title="Pure Mathematics" theme={t1}>
        From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help teams spend more time building better software for your customers.
      </Card>
    </div>

    <div className="container-inner" style={styles.content}>
      <Card style={styles.topRight} title="Data Analytics" theme={t2}>
        From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help teams spend more time building better software for your customers.
      </Card>

      <Card style={styles.bottomRight} title="Geopolotics" theme={t3}>
        From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help teams spend more time building better software for your customers.
      </Card>
    </div>
  </Section>
);

const styles = {
  cardHeader: {
    fontSize: '18px',
    fontWeight: '500',
    margin: '16px'
  },
  bottomRight: {
    marginLeft: '15px'
  },
  topRight: {
    marginBottom: '80px'
  },
  header: {
    // R & I header
  },
  paragraph: {
    maxWidth: '90%',
    color: Colors.textSecondary,
    marginBottom: '60px'
  },
  content: {
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '960px',
  }
}

export default ResearchAndInnovation;
