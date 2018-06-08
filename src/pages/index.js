import React from 'react';
import Link from 'gatsby-link';

import Section from '../components/section';
import Header from '../components/header';
import Hero from '../components/hero';
import ResearchAndInnovation from '../components/sections/researchAndInnovation';
import CaseStudies from '../components/sections/caseStudies';

const IndexPage = () => (
  <div>
    <Header />
    <Hero />
    <ResearchAndInnovation />
    <CaseStudies />
    <ResearchAndInnovation />
  </div>
);

export default IndexPage;
