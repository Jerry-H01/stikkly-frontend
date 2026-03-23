import React from "react";

const Brainstorm: React.FC = () => {
  return (
    <section className=" py-20 md:py-24 pb-28 md:pb-32 px-6 md:px-[128px] flex flex-col items-center justify-center">
      <div className="w-full max-w-[1728px] flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
          <h2 className="text-[40px] md:text-[80px] font-medium font-inter text-[#111] leading-[1.2] tracking-tight text-center">
            Brainstorm. Decide. Assign.
            <br />
            All in one place.
          </h2>
        </div>

        {/* Hero Image */}
        <div className="w-full flex justify-center mt-12 md:mt-[140px]">
          <img
            src="/Canvas-with-task-panel.svg"
            alt="Brainstorm, decide and assign interface"
            className="w-full max-w-[1326px] h-auto rounded-2xl object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Brainstorm;
