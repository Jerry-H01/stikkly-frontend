import React from "react";

const releaseNotes = [
  {
    date: "March 10, 2026",
    title: "Newly improved and enhanced UI",
    tags: ["NEW RELEASE", "UPDATE", "STIKKLY"],
    description: "Lorem ipsum dolor sit amet consectetur. Viverra quis sit augue dolor tellus. Nec quisque elit nunc posuere. Proin sagittis cursus leo id a interdum. Sit aliquet cras diam sollicitudin posuere. Malesuada sapien suspendisse sapien consequat velit proin at arcu neque. Nisl sed arcu euismod in faucibus at orci. Porta adipiscing viverra tempus eget auctor sit sed. Lacus urna libero ultrices tincidunt vel. Eget amet diam purus ipsum pellentesque posuere. Tincidunt proin sed lectus orci. Mus quam pharetra a massa vitae arcu. Eget sem volutpat bibendum ut. Montes in sit sit a.",
  },
  {
    date: "March 15, 2026",
    title: "Bugs Fixes",
    tags: ["UPDATE", "STIKKLY COMMUNITY"],
    description: "Lorem ipsum dolor sit amet consectetur. Viverra quis sit augue dolor tellus. Nec quisque elit nunc posuere. Proin sagittis cursus leo id a interdum. Sit aliquet cras diam sollicitudin posuere. Malesuada sapien suspendisse sapien consequat velit proin at arcu neque. Nisl sed arcu euismod in faucibus at orci. Porta adipiscing viverra tempus eget auctor sit sed. Lacus urna libero ultrices tincidunt vel. Eget amet diam purus ipsum pellentesque posuere. Tincidunt proin sed lectus orci. Mus quam pharetra a massa vitae arcu. Eget sem volutpat bibendum ut. Montes in sit sit a.",
  },
  {
    date: "March 18, 2026",
    title: "Version 2.0 is now live",
    tags: ["UPDATE", "STIKKLY", "NEW RELEASE"],
    description: "Lorem ipsum dolor sit amet consectetur. Viverra quis sit augue dolor tellus. Nec quisque elit nunc posuere. Proin sagittis cursus leo id a interdum. Sit aliquet cras diam sollicitudin posuere. Malesuada sapien suspendisse sapien consequat velit proin at arcu neque. Nisl sed arcu euismod in faucibus at orci. Porta adipiscing viverra tempus eget auctor sit sed. Lacus urna libero ultrices tincidunt vel. Eget amet diam purus ipsum pellentesque posuere. Tincidunt proin sed lectus orci. Mus quam pharetra a massa vitae arcu. Eget sem volutpat bibendum ut. Montes in sit sit a.",
    image: "/get-started1.svg",
  },
  {
    date: "April 15, 2026",
    title: "Bugs Fixes",
    tags: ["UPDATE", "STIKKLY COMMUNITY"],
    description: "Lorem ipsum dolor sit amet consectetur. Viverra quis sit augue dolor tellus. Nec quisque elit nunc posuere. Proin sagittis cursus leo id a interdum. Sit aliquet cras diam sollicitudin posuere. Malesuada sapien suspendisse sapien consequat velit proin at arcu neque. Nisl sed arcu euismod in faucibus at orci. Porta adipiscing viverra tempus eget auctor sit sed. Lacus urna libero ultrices tincidunt vel. Eget amet diam purus ipsum pellentesque posuere. Tincidunt proin sed lectus orci. Mus quam pharetra a massa vitae arcu. Eget sem volutpat bibendum ut. Montes in sit sit a.",
  },
];

const ReleaseNotes: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-24 px-6 md:px-[128px] mt-[120px]">
      <div className="max-w-[1728px] mx-auto">
        <div className="mb-24 flex flex-col items-center">
          <h1 className="text-[128px] font-semibold text-[#101828] text-center mb-10 leading-[131px] tracking-[-3.84px] font-dm-sans">
            Release Notes
          </h1>

          <p className="text-[25px] text-[#464646] text-center max-w-3xl leading-[26px] tracking-[-0.264px] font-normal font-inter self-stretch mx-auto">
            Follow Stikkly’s latest product news, or subscribe to RSS to be the first to know when new releases and updates go live.
          </p>

        </div>

        {/* Release Notes List */}
        <div className="flex flex-col gap-32">
          {releaseNotes.map((note, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 lg:gap-32 border-b border-[#EAECF0] pb-24 last:border-0">
              {/* Left Column: Date */}
              <div className="w-full md:w-1/4 lg:w-1/5 pt-1">
                <p className="text-[24px] font-normal text-[#111]">
                  {note.date}
                </p>
              </div>

              {/* Right Column: Content */}
              <div className="w-full md:w-3/4 lg:w-4/5 flex flex-col items-start text-left">
                <h2 className="text-[30px] font-normal text-[#101828] mb-6 tracking-[-1.2px]">
                  {note.title}
                </h2>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {note.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-[#F2F4F7] text-[#344054] font-dm-sans text-[18px] font-semibold rounded-md tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[18px] text-[#0C0C0C99] font-dm-sans leading-[28px] mb-12 max-w-5xl">
                  {note.description}
                </p>

                {note.image && (
                  <div className="w-full overflow-hidden rounded-[16px] border border-[#EAECF0]">
                    <img 
                      src={note.image} 
                      alt={note.title} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReleaseNotes;
