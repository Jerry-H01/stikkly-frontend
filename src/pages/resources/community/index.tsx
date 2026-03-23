import React from "react";
import Hero from "./hero";
import Connect from "./connect";
import CommunityEvents from "./community-events";
import Discussions from "./discussions";

const Community: React.FC = () => {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <Hero />
      <Connect />
      <CommunityEvents />
      <Discussions />
    </div>
  );
};


export default Community;
