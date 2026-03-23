import React from "react";

const stats = [
  { value: "10,000+", label: "Active Teams" },
  { value: "99.9%", label: "Uptime" },
  { value: "50K+", label: "Project Created" },
  { value: "4.3/5", label: "User Rating" },
];

const GetStarted: React.FC = () => {
  return (
    <section className="relative pt-32 pb-72 bg-[#F8F9FB] overflow-hidden min-h-[900px] flex flex-col justify-start">
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
        <div
          className="absolute top-[20%] left-[-10%] md:left-[-6%] z-10 transition-all duration-500"
          style={{
            width: "300px",
            maxWidth: "642px",
            height: "auto",
            transform: "rotate(6.01deg)",
            aspectRatio: "49/47",
          }}
        >
          <img
            src="/Star 4 1.svg"
            alt="Purple Star"
            className="w-full h-full object-contain md:w-[642px]"
          />
        </div>

        <div
          className="absolute top-[75%] left-[5%] md:left-[10%] z-50"
          style={{ width: "225px", height: "279px", aspectRatio: "25/31" }}
        >
          <img
            src="/mouse pointer 1.svg"
            alt="Cursor"
            className="w-full h-full object-contain"
          />
        </div>

        <div
          className="absolute top-[15%] left-[50%] -translate-x-1/2 md:top-[20%] z-0"
          style={{
            width: "200px",
            maxWidth: "437px",
            height: "auto",
            aspectRatio: "1/1",
          }}
        >
          <img
            src="/image 52.svg"
            alt="Silver Arrow"
            className="w-full h-full object-contain md:w-[437px]"
          />
        </div>

        <div
          className="absolute top-[45%] md:top-[35%] right-[-10%] md:right-[-5%] z-30 opacity-100"
          style={{
            width: "300px",
            maxWidth: "597px",
            height: "auto",
            transform: "rotate(4.19deg)",
            aspectRatio: "61/73",
          }}
        >
          <img
            src="/Puzzle 1.svg"
            alt="Purple Shape"
            className="w-full h-full object-contain md:w-[597px]"
          />
        </div>
      </div>

      <div className="w-full max-w-[1728px] mx-auto px-6 md:px-[128px] mb-20 md:mb-52 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start">
              <span className="text-[40px] md:text-[64px] font-dm-sans font-medium text-[#7058D0] tracking-tighter leading-none mb-3">
                {stat.value}
              </span>
              <span className="text-[#1A1A1A] font-medium text-[20px] md:text-[24px] font-dm-sans">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-40 flex justify-center items-center mt-32">
        <button
          className="group text-white transition-all duration-500 transform hover:scale-[1.01]"
          style={{
            display: "inline-flex",
            padding: "40px 80px",
            justifyContent: "center",
            alignItems: "center",
            gap: "33.394px",
            borderRadius: "22px",
            background: "var(--Foundation-Black-B900, #0F0F0F)",
            boxShadow: "inset 0 3.339px 3.006px 0 rgba(255, 255, 255, 0.28)",
          }}
        >
          <span
            className="font-dm-sans text-[28px] md:text-[52px]"
            style={{
              color: "#F8F1EA",
              textAlign: "center",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              letterSpacing: "-0.882px",
            }}
          >
            Get started for free
          </span>
          <div className="relative flex items-center justify-center overflow-hidden">
            <img
              className="w-[60px] h-[60px] md:w-[123px] md:h-[123px]"
              src="/image 44.svg"
              alt="Arrow Right"
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
