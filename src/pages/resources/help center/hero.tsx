import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const HelpHero: React.FC = () => {
  const categories = [
    "Accounts",
    "Projects",
    "Collaboration",
    "Billing",
    "Troubleshooting",
  ];

  return (
    <section className="bg-[#7058D01A] pt-[200px] pb-[150px] px-6 md:px-[128px] min-h-screen">
      <div className="max-w-[1728px] mx-auto flex flex-col items-center">
        {/* Title */}
        <h1 className="text-[110px] font-bold text-[#101828] text-center mb-6 leading-tight tracking-[-2.88px] font-dm-sans">
          Yello, how can we <br /> help you?
        </h1>

        {/* Subtitle */}
        <p className="text-[25px] text-[#11111199] text-center mb-16 font-normal">
          Find answers and inspiration on all things Stikkly.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-[1241px] mb-8 mx-auto">
          <div className="flex h-[96px] w-full items-center gap-4 pt-[24px] pr-[28px] pb-[24px] pl-[32px] rounded-[16px] border-2 border-[#D0D5DD] bg-white shadow-[0_2px_4px_0_rgba(16,24,40,0.05)] transition-all focus-within:ring-2 focus-within:ring-[#7F56D9] focus-within:border-transparent">

            <RiSearch2Line className="h-8 w-8 text-[#98A2B3] flex-shrink-0" />
            <input
              type="text"
              className="w-full bg-transparent border-none text-[32px] text-[#101828] placeholder-[#98A2B3] outline-none"
              placeholder="Search anything stikkly"
            />
          </div>
        </div>


        {/* Categories */}
        <div className="flex flex-wrap justify-start gap-3 w-full max-w-[1241px] mx-auto">

          {categories.map((category) => (
            <button
              key={category}
              className="flex items-center justify-center gap-[10px] px-5 py-[10px] bg-transparent border border-[#3333331A] rounded-[51px] text-[20px] font-normal text-[#475467] hover:bg-white transition-all shadow-sm"

            >
              {category}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HelpHero;
