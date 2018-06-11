import React from 'react';
import Link from 'gatsby-link';
import Section from '../components/section';
import BostonBackground from '../img/boston_blur.jpg';
import { Colors } from '../constants';

/**
 * hero background will be a simple graph, maybe some fading near the bottom
 * from the bottom we see trend lines zig and zag in sharp turns upwards toward the top right
 * maybe have 3(?) trend lines, 2 stopping early and the 3rd going off into the right hand side
 *   - this will eventually hit the roof, but we'll try to angle it so it'd go off right
 *   - one stops short, the other later
 *   - use the 3 gradients
 * UPDATE:
 * do this but with the theming of above 
 *  - https://devinhalladay.imgix.net/2018/03/cents/cover.png?w=800&fm=jpg&q=100
 */

const RightArrowAscii = ({ hovering }) => {
  const position = hovering
    ? { marginLeft: '10px' }
    : { marginLeft: '5px' };
  return (
    <span style={{
      transition: 'all .25s cubic-bezier(.215,.61,.355,1)',
      ...position
    }}>
      <span style={{
        marginRight: '-10px'
      }}>—</span>→
    </span>
  );
};

class Hero extends React.Component {
  state = {
    hovering: false
  };

  render() {
    return (
      <Section style={styles.hero} curveColor={Colors.altPrimary}>
        <div className="container-inner" style={styles.message}>
          <h1 style={styles.header}>Trading <br /> made easy.</h1>
          <p style={styles.paragraph}>Our cloud computing platform was built with simplicity at the forefront, so managing infrastructure is easy, whether your business is running one virtual machine or ten thousand. DigitalOcean gets out of your way so teams can build, deploy, and scale cloud applications faster and more efficiently.</p>
          <div className="hero-links">
            <Link
              className="primary-button"
              to="/"
            >
              Contact Us
            </Link>
            <Link
              onMouseOver={() => this.setState({ hovering: true })}
              onMouseOut={() => this.setState({ hovering: false })}
              to="/">
              Learn more about what we do <RightArrowAscii hovering={this.state.hovering} />
            </Link>
          </div>
        </div>
      </Section>
    );
  };
}

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
    maxWidth: '60%'
  }
}

export default Hero;
