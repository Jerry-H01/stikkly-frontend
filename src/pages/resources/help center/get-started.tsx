import React from "react";


const GetStarted: React.FC = () => {
  return (
    <section className="bg-[#F4D13B1A] py-24 px-6 md:px-[128px]">
      <div className="max-w-[1728px] mx-auto flex flex-col md:flex-row gap-16 items-start mt-[150px]">
        {/* Left: Section Title */}
        <div className="w-full md:w-1/3">
          <h2 className="text-[49px] font-normal text-[#101828] leading-[1.1] tracking-[-1.92px] font-dm-sans max-w-sm">
            Get started with a video walkthrough
          </h2>
        </div>


        {/* Right: Video and Details */}
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="relative group cursor-pointer overflow-hidden rounded-[8px] border-[1px] border-[#3FA3E2]">
            <img 
              src="/get-started1.svg" 
              alt="Video thumbnail" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Video Description */}
          <div className="mt-12">
            <h3 className="text-[50px] font-normal text-[#101828] mb-4 tracking-[-1.44px] font-dm-sans">
              Great for Stikkly beginners
            </h3>
            <p className="text-[24px] text-[#475467] font-normal">
              Learn the basics of Stikkly with this beginner-friendly walkthrough.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
