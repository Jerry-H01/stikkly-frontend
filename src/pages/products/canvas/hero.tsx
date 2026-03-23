import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-white mt-[126px]">
      
      {/* Decorative Dotted Line on Right */}
      <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center z-0 w-[20%] xl:w-[30%]">
      </div>

      <div className="mx-auto px-6 md:px-[128px] max-w-[1728px] relative z-10 flex flex-col items-center text-center">
        <h1 className="text-[56px] md:text-[128px] font-dm-sans leading-[1.1] tracking-[-0.02em] text-[#111] mb-6 max-w-[800px] mx-auto">
          Infinite <br className="hidden md:block" />
          Visual Canvas
        </h1>
        
        <p className="w-full md:w-[1132px] max-w-none font-dm-sans text-[20px] md:text-[32px] font-normal text-[#464646] leading-normal tracking-[-0.264px] mb-12 md:mb-[83px] text-center mx-auto">
          Capture ideas, organize them visually, and turn rough thoughts into
          structured work, all in one flexible canvas.
        </p>
        
        <button className="flex w-[311px] h-[72px] px-[24.084px] py-[19.568px] justify-center items-center gap-[15.053px] rounded-[12.042px] bg-[#0F0F0F] shadow-[inset_0_1.505px_1.355px_0_rgba(255,255,255,0.28)] text-white font-dm-sans font-normal text-[24px] hover:bg-black/80 transition-colors">
          Get started for free
        </button>
      </div>

      <div className="w-full max-w-[1469px] mx-auto mt-12 md:mt-[83px] px-4 relative z-10 flex justify-center">
        <img
          src="/canvas-hero.svg"
          alt="Canvas interface"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
