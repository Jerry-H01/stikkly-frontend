import React from "react";

const Connect: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full pt-[39px] pb-[39.968px] px-[318px] gap-[30px] bg-[#7058D01A] mx-auto overflow-hidden">
      <h2 className="flex flex-col justify-center flex-[1_0_0] w-[1130px] text-[40px] font-semibold font-dm-sans text-[#101828] leading-[32px] tracking-[-1.2px] text-center mx-auto mt-[39px]">
        Connect with stickkly and other creatives through our handles
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-[30px]">
        <a
          href="#"
          className="group flex items-center gap-4 hover:opacity-90 transition-all duration-200"
        >
          <img src="/slack.svg" alt="slack" className="w-8 h-8 md:w-9 md:h-9" />
          <span className="text-[26px] font-black text-[#0F172A] tracking-tighter">
            slack
          </span>
        </a>

        <a
          href="#"
          className="group flex items-center gap-4 hover:opacity-90 transition-all duration-200"
        >
          <img
            src="/discord-icon-svgrepo-com.svg"
            alt="discord"
            className="w-8 h-8 md:w-9 md:h-9"
          />
          <span className="text-[26px] font-black text-[#0F172A] tracking-tighter">
            Discord
          </span>
        </a>
      </div>
    </section>
  );
};

export default Connect;
