import React from 'react';

const FEATURE_ITEMS = [
  {
    title: "Get all your teammates onboard",
    description: "Add your teammates and start planning together while assigning their respective roles",
    image: "/start-with.svg",
    reverse: false
  }, 
  {
    title: "Ideas can be tagged to specific teammates by names mention",
    description: "Tag ideas to teammates or seek thoughts on ideas from silent teammates",
    image: "/see-meaning.svg",
    reverse: true
  },
  {
    title: "Expressing thoughts on tasks and ideas",
    description: "Leave your thought or opinions by commenting on ideas and tasks within the canvas.",
    image: "/bring-related.svg",
    reverse: false
  },
  {
    title: "See how work is progressing",
    description: "Track how tasks evolve with a clear activity timeline across the various teams.",
    image: "/every-p.svg", 
    reverse: true
  },
  {
    title: "Tasks stay connected to the work",
    description: "Unlike traditional tools, tasks remain tied to the ideas and structure they came from.",
    image: "/every-p.svg", 
    reverse: false
  } 
];

const Features: React.FC = () => {
  return (
    <section className="bg-[#FDC693] py-20 md:py-32 px-6 md:px-[128px] overflow-hidden">
      <div className="max-w-[1728px] mx-auto space-y-24 md:space-y-48">
        {FEATURE_ITEMS.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-20`}
          >
            <div className="w-full lg:w-1/2 max-w-[580px]">
              <h2 className="text-[40px] md:text-[64px] font-medium leading-[1.1] text-[#111] mb-6 font-dm-sans tracking-[-0.02em]">
                {item.title}
              </h2>
              <p className="text-[18px] md:text-[24px] text-[#464646] leading-relaxed font-dm-sans max-w-[480px]">
                {item.description}
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-auto max-w-[700px] object-contain drop-shadow-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
