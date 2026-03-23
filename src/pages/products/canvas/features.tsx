import React from 'react';

const FEATURE_ITEMS = [
  {
    title: "Start with a thought",
    description: "Drag, place, and rearrange notes however you think best.",
    image: "/start-with.svg",
    reverse: false
  },
  {
    title: "See meaning at a glance",
    description: "Use colors to instantly understand your work without reading everything.",
    image: "/see-meaning.svg",
    reverse: true
  },
  {
    title: "Bring related ideas together",
    description: "Group notes to create structure and relationships between ideas.",
    image: "/bring-related.svg",
    reverse: false
  },
  {
    title: "Keep work organized across projects",
    description: "Organize your canvas by team, client, or project so everything stays easy to navigate.",
    image: "/every-p.svg",
    reverse: true
  }
];

const Features: React.FC = () => {
  return (
    <section className="bg-[#E3DBFF] py-20 md:py-32 px-6 md:px-[128px] overflow-hidden">
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
