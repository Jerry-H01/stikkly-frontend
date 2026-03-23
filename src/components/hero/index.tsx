import React from "react";
// import { ArrowRight } from "lucide-react";
// import heroVideo from "../../assets/Animation(Light theme).mp4";  

const Hero: React.FC = () => {
  return (
    <section className="relative h-[calc(100vh-84px)] mt-[84px] flex flex-col items-center justify-center overflow-hidden bg-[#F8F9FB]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none mix-blend-multiply">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* <source src={heroVideo} type="video/mp4" /> */}
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-[128px] max-w-[1728px] -mt-10">
        {/* Heading */}
        <h1 className="flex flex-col md:flex-row items-center md:items-baseline justify-center gap-x-3 gap-y-2 mb-8 md:whitespace-nowrap">
          <span className="text-[40px] md:text-[80px] font-sans font-bold tracking-tight text-black flex items-center leading-none">
            Your studio's
          </span>
          <span className="relative flex items-center justify-center">
            <span
              className="text-[60px] md:text-[128px] bg-clip-text text-transparent bg-gradient-to-r from-[#0C8CE9] via-[#BD74FF] to-[#3AA5FF] pb-2 leading-none"
              style={{
                fontFamily: "'TT Backwards Script'",
                fontWeight: "normal",
              }}
            >
              digital desk
            </span>
            {/* Sparkle icon from design */}
            <svg
              className="absolute top-2 -right-4 md:-right-8 w-10 h-10 md:w-12 md:h-12 text-[#2AB1FF]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
            </svg>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-black font-inter text-[20px] md:text-[22px] max-w-2xl mb-12 font-medium z-10">
          Visual task management built for clear creative handoffs
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 z-10 relative">
          {/* Black Get Started Arrow Button */}
          <button className="flex justify-center items-center gap-[15.053px] self-stretch px-[24.084px] py-[9.568px] rounded-[12.042px] bg-[var(--Foundation-Black-B900,#0F0F0F)] shadow-[inset_0_1.505px_1.355px_0_rgba(255,255,255,0.28)] text-white font-semibold hover:bg-black/80 transition-all">
            <span className="text-[15px] md:text-[16px]">
              Get started for free
            </span>
            <div className="bg-gradient-to-b rounded-[8px] w-9 h-9 md:w-10 md:h-10 flex items-center justify-center shadow-inner">
              <img src="/image 44.svg"  />
            </div>
          </button>

          {/* Light Gray Request Demo Button */}
          <button className="flex justify-center items-center gap-[15.053px] self-stretch px-[24.084px] py-[9.568px] rounded-[12.042px] bg-[var(--Foundation-Black-B40,#E0E0E0)] shadow-[inset_0_3.011px_4.967px_0_rgba(255,255,255,0.39)] text-black font-semibold hover:bg-[#D9D9D9] transition-all text-[15px] md:text-[16px]">
            Request a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
