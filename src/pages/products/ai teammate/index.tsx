import React from "react";
import Hero from "./hero";
import Features from "./features";
import Testimonial from "./testimonial";
import Cta from "./cta";

const AiTeammate: React.FC = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Testimonial />
            <Cta />
        </div>
    );
};

export default AiTeammate;