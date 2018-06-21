import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import ResearchAndInnovation from '../components/sections/researchAndInnovation';
import CaseStudies from '../components/sections/caseStudies';
import OurTeam from '../components/sections/ourTeam';
import Footer from '../components/sections/footer';

const IndexPage = () => (
  <div>
    <Header />
    <Hero />
    <ResearchAndInnovation />
    <CaseStudies />
    <OurTeam />
    <Footer />
  </div>
);

export default IndexPage;
