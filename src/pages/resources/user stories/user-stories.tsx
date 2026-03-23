import React from "react";

const stories = [
  {
    title: "How Knowit connects strategy, design and development with Stikkly",
    description: "Nordics consultancy builds faster for clients with Stikkly",
  },
  {
    title: "How Knowit connects strategy, design and development with Stikkly",
    description: "Nordics consultancy builds faster for clients with Stikkly",
  },
  {
    title: "How Knowit connects strategy, design and development with Stikkly",
    description: "Nordics consultancy builds faster for clients with Stikkly",
  },
  {
    title: "How Knowit connects strategy, design and development with Stikkly",
    description: "Nordics consultancy builds faster for clients with Stikkly",
  },
  {
    title: "How Knowit connects strategy, design and development with Stikkly",
    description: "Nordics consultancy builds faster for clients with Stikkly",
  },
  {
    title: "How Knowit connects strategy, design and development with Stikkly",
    description: "Nordics consultancy builds faster for clients with Stikkly",
  },
];

const UserStories: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-[128px]">
      <div className="max-w-[1728px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            {/* Thumbnail Placeholder */}
            <div className="aspect-[1.5/1] bg-[#EEEEEE] mb-8 rounded-[4px] transition-all group-hover:bg-[#E5E5E5]"></div>
            
            {/* Content */}
            <h3 className="text-[30px] font-semibold text-[#101828] mb-4 leading-[36px] font-dm-sans ">
              {story.title}
            </h3>
            <p className="text-[20px] text-[#475467] leading-[30px] font-normal">
              {story.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserStories;
