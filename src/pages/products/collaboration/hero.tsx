import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-white mt-[126px]">
      <div className="w-full max-w-[1728px] mx-auto px-6 md:px-[128px] relative z-10 flex flex-col items-center text-center">
        <h1 className="text-[48px] md:text-[128px] font-dm-sans leading-[1.1] tracking-[-0.04em] text-[#111] mb-6 max-w-[1000px] mx-auto font-normal">
          Collaboration
        </h1>

        <h2 className="text-[20px] md:text-[32px] font-dm-sans font-bold text-[#464646] mb-4 tracking-tight">
          Teams work together in shared visual spaces.
        </h2>

        <p className="w-full max-w-[978px] font-dm-sans text-[18px] md:text-[32px] font-normal text-[#464646] mb-12 md:mb-[83px] text-center mx-auto">
          Pirate ipsum arrgh bounty warp jack. Or shot timbers to bilged red.
          Guns gar fleet tea driver spirits boom. Buccaneer of warp smartly.
        </p>

        <button className="bg-[#0F0F0F] text-[#F8F1EA] font-dm-sans font-semibold text-[20px] md:text-[24px] hover:bg-black/80 transition-all mb-12 md:mb-[83px] w-[280px] md:w-[311px] h-[64px] md:h-[72px] rounded-[12px] flex items-center justify-center shadow-[inset_0_1.505px_1.355px_0_rgba(255,255,255,0.28)]">
          Try it now
        </button>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10 flex justify-center">
        <img
          src="/collab-hero.svg"
          alt="Collaboration interface"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
