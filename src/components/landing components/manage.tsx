import React from "react";

const stats = [
  { value: "10,000+", label: "Active Teams" },
  { value: "99.9%", label: "Uptime" },
  { value: "50K+", label: "Projects Created" },
];

const Manage: React.FC = () => {
  return (
    <>
      {/* Stats Section */}
      <section className="bg-white py-20 px-4 md:px-20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-4 ${
                index !== stats.length - 1
                  ? "md:border-r md:border-gray-200"
                  : ""
              }`}
            >
              <div className="flex flex-col items-start gap-2">
                <span
                  className="text-[48px] md:text-[72px] font-display font-normal text-[#7058D0] leading-tight tracking-[-1px]"
                  style={{ WebkitTextStroke: "0.5px #7058D0" }}
                >
                  {stat.value}
                </span>
                <span className="text-[#15151599] text-[18px] font-inter font-normal">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Manage;
