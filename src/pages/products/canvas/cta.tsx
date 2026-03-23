import React from "react";
import { FcGoogle } from "react-icons/fc";

const Cta: React.FC = () => {
  return (
    <section className="w-full bg-[#FFE4E8] py-20 px-6 md:px-[128px] flex justify-center items-center overflow-hidden min-h-[600px] md:min-h-[678px]">
      <div className="w-full max-w-[1728px] flex flex-col md:flex-row items-center justify-center relative">
        {/* Left Side: Illustration */}
        <div className="md:absolute md:left-[-40px] lg:left-[60px] xl:left-[160px] top-1/2 -translate-y-1/2 z-0 pointer-events-none hidden md:block">
          <img
            src="/get-started.svg"
            alt="Get Started Illustration"
            style={{
              width: "976.205px",
              height: "668.748px",
              transform: "rotate(4.689deg)",
              aspectRatio: "127/87",
            }}
            className="max-w-none object-contain"
          />
        </div>

        {/* Mobile Illustration */}
        <div className="w-full md:hidden flex justify-center mb-10">
          <img
            src="/get-started.svg"
            alt="Get Started Illustration"
            className="w-full max-w-[400px]"
          />
        </div>

        {/* Right Side: Form Card */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10 md:ml-auto">
          <div className="bg-white rounded-[16px] p-8 md:p-10 shadow-[0px_4px_24px_rgba(0,0,0,0.04)] w-full max-w-[480px]">
            <h2 className="text-[36px] font-bold text-[#111827] mb-8 leading-tight tracking-tight">
              Get started for free
            </h2>

            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-black rounded-[8px] text-[15px] font-semibold text-black hover:bg-gray-50 transition-colors bg-white">
              <FcGoogle size={20} />
              Continue with Google
            </button>

            <div className="flex justify-center my-5">
              <span className="text-black text-[13px] font-bold">Or</span>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="example@company.com"
                className="w-full px-4 py-3 bg-[#F3F4F6] border border-gray-200 focus:border-gray-300 focus:bg-white rounded-[8px] text-[15px] outline-none transition-all placeholder:text-[#9CA3AF]"
              />
              <button className="w-full py-3 px-4 bg-[#0F172A] hover:bg-[#1e293b] text-white rounded-[8px] text-[15px] font-semibold transition-colors mt-2">
                Continue with email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
