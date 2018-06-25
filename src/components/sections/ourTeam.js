import React from 'react';
import Link from 'gatsby-link';
import Section from '../section';
import { Colors } from '../../constants';
import ProfileNickZuber from '../../img/icons/me.jpg';

let _id = 0;

function ProfileIcon({ theme = {}, icon, ...props }) {
  return (
    <div className="card-icon-profile" style={{
      ...theme,
      backgroundImage: `url(${icon})`
    }}>
    </div>
  );
}

function Card({ title, icon, children, style, ...props }) {
  const cardId = ++_id;
  return (
    <div className="content-card" style={{
      ...style,
      float: cardId % 2 !== 0 ? 'left' : 'right'
    }}>
      <ProfileIcon icon={icon} />
      <h3 style={styles.cardHeader}>{title}</h3>
      <p style={styles.cardParagraph}>{children}</p>
    </div>
  );
}

const OurTeam = () => (
  <Section id="research-and-innovation" bg={Colors.altPrimary}>
    <div className="container-inner" style={styles.content}>
      <h2 id="our-team">Meet Our Team</h2>
      <p style={styles.paragraph}>It really doesn't get much better than this, we're a dedicated team of just a couple of guys being dudes, and maybe a few dudes being guys.</p>

      <Card title="Alejandro Lopez" icon={ProfileNickZuber} style={styles.userCard}>
        From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help.
      </Card>

      <Card title="Michael Mills" icon={ProfileNickZuber} style={styles.userCard}>
        From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help.
      </Card>

      <Card title="Nicolas Spoors" icon={ProfileNickZuber} style={styles.userCard}>
        From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help.
      </Card>
    </div>
  </Section>
);

const styles = {
  userCard: {
    width: '70%',
    display: 'block',
    margin: '40px 10px',
    padding: '18px 32px'
  },
  cardHeader: {
    fontSize: '20px',
    fontWeight: '500',
    margin: '12px 0 12px 50px',
    textAlign: 'left',
    width: '100%'
  },
  cardParagraph: {
    textAlign: 'left'
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
    margin: '0 auto',
    maxWidth: '960px',
  }
}

export default OurTeam;
