import React from "react";
import HelpHero from "./hero";
import GetStarted from "./get-started";
import FeaturesTutorial from "./features-tutorial";
import BrainStorm from "./brain-storm";
import FAQ from "../../../components/landing components/faq";

const HelpCenter: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <HelpHero />
            <GetStarted />
            <FeaturesTutorial />
            <FAQ />
            <BrainStorm />
            
        </div>
    );
}




export default HelpCenter;