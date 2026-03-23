import React from "react";

const FEATURE_ITEMS = [
  {
    title: "Turn any idea into a task",
    description:
      "Move directly from thinking to execution by converting notes into tasks.",
    image: "/campaign.svg",
    reverse: false,
  },
  {
    title: "Every task comes with its full context",
    description:
      "Each task isn't just a title, it carries the thinking behind it.",
    image: "/every-task.svg",
    reverse: true,
  },
  {
    title: "See how work is progressing",
    description: "Track how tasks evolve with a clear activity timeline.",
    image: "/image 44.svg",
    reverse: false,
  },
  {
    title: "Tasks stay connected to the work",
    description:
      "Unlike traditional tools, tasks remain tied to the ideas and structure they came from.",
    image: "/image 52.svg",
    reverse: true,
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-[#82BFFF] py-20 md:py-32 px-6 md:px-[128px] overflow-hidden">
      <div className="max-w-[1728px] mx-auto space-y-24 md:space-y-48">
        {FEATURE_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between gap-20`}
          >
            <div className="w-full lg:w-1/2 max-w-[580px]">
              <h2 className="text-[32px] md:text-[64px] font-medium leading-[1.1] text-[#0F0F0F] mb-6 font-dm-sans tracking-[-0.02em]">
                {item.title}
              </h2>
              <p className="text-[24px] text-[#0F0F0F]/80 leading-relaxed font-dm-sans max-w-[480px]">
                {item.description}
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto max-w-[700px] object-contain"
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
