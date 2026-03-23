import React from "react";
import Hero from "./hero";
import Features from "./features";
import Testimonial from "./testimonial";
import Cta from "./cta";

const CanvasPage: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-white min-h-screen w-full">
      <div className="w-full flex flex-col w-full">
        <Hero />
        <Features />
        <Testimonial />
        <Cta />
      </div>
    </div>
  );
};

export default CanvasPage;
