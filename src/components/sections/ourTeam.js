import React from 'react';
import VisibilityTrigger from '../visibilityTrigger';
import gud from 'gud'
import Section from '../section';
import { Colors } from '../../constants';
import ProfileNickZuber from '../../img/profiles/nickzuber.jpg';
import ProfileNickZuber2 from '../../img/profiles/nickzuber2.jpeg';
import ProfileNickZuber3 from '../../img/profiles/nickzuber3.jpg';

const SvgDashedLine = ({ d, isLeft }) => {
  const id = gud();
  const nodeId = `svg-line-${id}`;
  return (
    <div
      id={nodeId}
      className="animate-in-waiting"
    >
      <VisibilityTrigger nodeId={nodeId} />
      <svg
        className="dashed-line"
        width="250"
        height="200"
        // viewBox="0 150 300 100"
        viewBox={isLeft ? "-25 190 300 100" : "10 190 300 100"}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <path
            strokeWidth="4"
            stroke="#bac4e0"
            strokeLinecap="round"
            strokeDasharray="30, 20, 15, 20, 30"
            d={d}
          />
        </g>
      </svg>
    </div>
  )
}

function ProfileIcon({ theme = {}, icon, ...props }) {
  return (
    <div className="card-icon-profile" style={{
      ...theme,
      backgroundImage: `url(${icon})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    }}>
    </div>
  );
}

function Card({ title, icon, children, style, ...props }) {
  const id = gud();
  const nodeId = `content-card-${id}`;
  return (
    <div id={nodeId} className="content-card animate-in-waiting" style={style}>
      <VisibilityTrigger nodeId={nodeId} />
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

      <div style={styles.flexWrapper}>
        <Card title="Alejandro Lopez" icon={ProfileNickZuber} style={styles.userCard}>
          From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help.
        </Card>
        <div style={{ flexBasis: '25%' }} />
      </div>

      <div style={styles.flexWrapper}>
        <SvgDashedLine d="M 25 125 Q 25 275 250 275" isLeft={true} />
        <Card title="Michael Mills" icon={ProfileNickZuber2} style={styles.userCard}>
          From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help.
        </Card>
      </div>

      <div style={styles.flexWrapper}>
        <Card title="Nicolas Spoors" icon={ProfileNickZuber3} style={styles.userCard}>
          From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help.
        </Card>
        <SvgDashedLine d="M 250 125 Q 250 275 25 275" isLeft={false} />
      </div>

    </div>
  </Section>
);

const styles = {
  userCard: {
    flexBasis: '75%',
    display: 'block',
    margin: '40px 10px',
    padding: '18px 32px',
    clear: 'both'
  },
  flexWrapper: {
    display: 'flex',
    position: 'relative'
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
