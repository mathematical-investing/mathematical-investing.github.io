import React from 'react';
import LocalLink from '../components/localLink';
import Section from '../components/section';
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis
} from 'victory';
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
  const shiftingPosition = hovering
    ? { marginLeft: '5px' }
    : { marginLeft: '2px' };
  return (
    <span style={{
      transition: 'all .25s cubic-bezier(.215,.61,.355,1)',
      ...shiftingPosition
    }}>
      <span style={{ transition: 'all .25s cubic-bezier(.215,.61,.355,1)' }}>
        →
      </span>
    </span>
  );
};

class Hero extends React.Component {
  state = {
    hovering: false
  };

  render() {
    return (
      <div>
        {/* temp */}
        <div className="graph-background">
          <svg>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fe75b6" stopOpacity="0%" />
                <stop offset="50%" stopColor="#fd909f" stopOpacity="0%" />
                <stop offset="100%" stopColor="#fbcc6b" stopOpacity="0%" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#bf8dfc" stopOpacity="0%" />
                <stop offset="50%" stopColor="#bf8dfc" stopOpacity="0%" />
                <stop offset="100%" stopColor="#30d9e7" stopOpacity="0%" />
              </linearGradient>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ede9a" stopOpacity="0%" />
                <stop offset="50%" stopColor="#0ede9a" stopOpacity="0%" />
                <stop offset="100%" stopColor="#07f5f1" stopOpacity="0%" />
              </linearGradient>
              <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1c2237" stopOpacity="0%" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0%" />
              </linearGradient>
            </defs>
          </svg>

          <VictoryChart>
            <VictoryAxis
              style={{
                axis: { stroke: "none" },
                axisLabel: { fontSize: 0 },
                grid: { stroke: "none" },
                ticks: { stroke: "none", size: 0 },
                tickLabels: { fontSize: 0 }
              }}
            />
            <VictoryLine
              style={{
                data: { stroke: "url(#grad1)", strokeWidth: 10 },
                parent: { marginTop: '-200px' }
              }}
              interpolation="linear"
              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 },
                { x: 6, y: 8 }
              ]}
            />
            <VictoryLine
              style={{
                data: { stroke: "url(#grad2)", strokeWidth: 10 }
              }}
              interpolation="linear"
              data={[
                { x: 1, y: 1 },
                { x: 2, y: 4 },
                { x: 3, y: 2 },
                { x: 4, y: 7 },
                { x: 5, y: 11 },
                { x: 6, y: 12 }
              ]}
            />
            <VictoryLine
              style={{
                data: { stroke: "url(#grad3)", strokeWidth: 10 }
              }}
              interpolation="linear"
              data={[
                { x: 1, y: 1 },
                { x: 2, y: 3 },
                { x: 3, y: 6 },
                { x: 4, y: 9 },
                { x: 5, y: 17 },
                { x: 6, y: 20 }
              ]}
            />
          </VictoryChart>
        </div>

        <Section style={styles.hero} curveColor={Colors.altPrimary}>
          <div className="container-inner" style={styles.message}>
            <h1 style={styles.header}>Trading <br /> made easy.</h1>
            <p style={styles.paragraph}>Our cloud computing platform was built with simplicity at the forefront, so managing infrastructure is easy, whether your business is running one virtual machine or ten thousand. DigitalOcean gets out of your way so teams can build, deploy, and scale cloud applications faster and more efficiently.</p>
            <div className="hero-links">
              <LocalLink
                className="primary-button"
                to="#our-team"
              >
                Contact Us
              </LocalLink>
              <LocalLink
                to="#research-and-innovation"
                onMouseOver={() => this.setState({ hovering: true })}
                onMouseOut={() => this.setState({ hovering: false })}
              >
                Learn more about what we do <RightArrowAscii hovering={this.state.hovering} />
              </LocalLink>
            </div>
          </div>
        </Section>
      </div>
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
    maxWidth: '60%',
    zIndex: 1
  }
}

export default Hero;
