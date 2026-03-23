import React from "react";
import Hero from "./hero";
import Features from './features';
import Testimonials from "./testimonials";


const TaskManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
};

export default TaskManagement;