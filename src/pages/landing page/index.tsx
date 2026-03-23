import React from "react";
import Hero from "../../components/hero";
import Trusted from "../../components/landing components/trusted";
import Brainstorm from "../../components/landing components/brainstorm";
import Feedback from "../../components/landing components/feedback";
import FAQ from "../../components/landing components/faq";
// import Footer from "../../components/footer";
// import Manage from "../../components/landing components/manage";
import GetStarted from "../../components/landing components/getstarted";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Hero />
      <Trusted />
      <Brainstorm />
      <Feedback />
      <GetStarted />
      <FAQ />

    </div>
  );
};

export default LandingPage;
