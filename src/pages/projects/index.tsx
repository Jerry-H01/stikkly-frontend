import React from "react";

const ProductPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col items-center justify-center relative overflow-hidden dotted-bg pt-20">
      {/* Central Content */}
      <div className="text-center max-w-[1728px] px-6 md:px-[128px] z-10 flex flex-col items-center">
        <h1 className="font-serif text-[48px] md:text-[120px] leading-[1.05] text-[#111111] mb-6 tracking-tight">
          A visual workspace for thinking and building
        </h1>
        <p className="font-sans text-[18px] md:text-[22px] text-[#6B6B6B] px-4">
          Stikkly connects ideation, planning, and collaboration.
        </p>
      </div>

      {/* Floating Toolbar */}
      <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 z-20 w-full px-6 flex justify-center">
        <div
          className="bg-white rounded-[10px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#E5E5E5] flex justify-center items-center transform -rotate-2 origin-center hover:rotate-0 transition-transform duration-500 max-w-full"
          style={{ padding: "11.209px 17.934px", gap: "26.901px" }}
        >
          <img src="/tools.svg" alt="Toolbar" className="h-auto w-[500px] max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
