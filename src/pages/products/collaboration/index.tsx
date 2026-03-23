import React from "react";
import Hero from "./hero";
import Features from "./features";
import Testimonials from "../task management/testimonials";
import Cta from "./cta";

const Collaboration: React.FC = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Testimonials />
           <Cta />
        </div>
    );
};

export default Collaboration;