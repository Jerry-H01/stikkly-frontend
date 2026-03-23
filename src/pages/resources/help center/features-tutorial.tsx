import React from "react";
import { Play } from "lucide-react";

const tutorials = [
  {
    title: "How to setup your stikkly account",
    description: "Pirate ipsum arrgh bounty warp jack. Ipsum blimey landlubber weigh yellow. Roger aft pin gaff bow pin tea. Fluke lanyard.",
  },
  {
    title: "Creating your first project",
    description: "Pirate ipsum arrgh bounty warp jack. Ipsum blimey landlubber weigh yellow. Roger aft pin gaff bow pin tea. Fluke lanyard.",
  },
  {
    title: "Setting up team collaboration",
    description: "Pirate ipsum arrgh bounty warp jack. Ipsum blimey landlubber weigh yellow. Roger aft pin gaff bow pin tea. Fluke lanyard.",
  },
  {
    title: "Customizing your workspace",
    description: "Pirate ipsum arrgh bounty warp jack. Ipsum blimey landlubber weigh yellow. Roger aft pin gaff bow pin tea. Fluke lanyard.",
  },
  {
    title: "Importing data from other tools",
    description: "Pirate ipsum arrgh bounty warp jack. Ipsum blimey landlubber weigh yellow. Roger aft pin gaff bow pin tea. Fluke lanyard.",
  },
  {
    title: "Exporting your project",
    description: "Pirate ipsum arrgh bounty warp jack. Ipsum blimey landlubber weigh yellow. Roger aft pin gaff bow pin tea. Fluke lanyard.",
  },
];

const FeaturesTutorial: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-[128px]">
      <div className="max-w-[1728px] mx-auto mt-[150px]">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-[50px] font-normal text-[#0F0F0F] mb-4 font-dm-sans">
            Featured Tutorials
          </h2>
          <p className="text-[24px] text-[#111] font-normal">
            See our best features in action. Subscribe on YouTube so you never miss a video.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mb-20">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              {/* Thumbnail Placeholder */}
              <div className="aspect-[16/9] bg-[#D9D9D9] mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 text-[#D9D9D9] fill-[#D9D9D9]" />
                </div>
              </div>
              
              <h3 className="text-[25px] font-bold text-[#101828] mb-3 transition-colors">
                {tutorial.title} 
              </h3>
              <p className="text-[16px] text-[#475467] leading-[24px]">
                {tutorial.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="flex items-center justify-center gap-[15px] w-[311px] h-[72px] pt-[19.5px] pr-[24px] pb-[19.5px] pl-[24px] rounded-[12px] bg-[#0F0F0F] text-white text-[18px] font-semibold shadow-[inset_0_1.5px_1.35px_0_rgba(255,255,255,0.28)] hover:bg-[#1a1a1a] transition-all">
          Visit Our Youtube
        </button>

      </div>
    </section>
  );
};

export default FeaturesTutorial;
