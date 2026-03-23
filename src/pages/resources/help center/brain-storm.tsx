import React from "react";

const BrainStorm: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-[128px]">
      <div className="max-w-[1728px] mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-[50px] text-[#0F0F0F] font-normal text-[#101828] leading-[1.1] tracking-[-1.92px] font-dm-sans mb-8 max-w-lg">
            Brainstorm. Decide. Assign. <br /> All in one place.
          </h2>
          <p className="text-[24px] text-[#111] font-normal leading-[30px] mb-12 max-w-xl">
            Turn brainstorms into clear, trackable work with all the context
            your team needs to build it right the first time.
          </p>

          {/* CTA Button */}
          <button className="flex items-center gap-3 bg-[#0D0D0D] text-white pl-8 pr-3 py-3 rounded-[12px] group transition-all hover:bg-black">
            <span className="text-[24px] font-semibold">
              Get started for free
            </span>
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="/image 44.svg"
                alt="Arrow Right"
                className="w-15 h-15 text-white"
              />
            </div>
          </button>
        </div>

        {/* Right Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/brain-storm.png"
            alt="Brainstorming Illustration"
            className="w-full max-w-[700px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BrainStorm;
