import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-[#fff] mt-[60px]">
      <div className="absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(110vw,900px)] h-[min(110vw,900px)]">
        {[1, 0.78, 0.56, 0.36].map((scale, i) => (
          <div
            key={i}
            className={`absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[1px] border-slate-400/10`}
            style={{
              width: `${scale * 100}%`,
              height: `${scale * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Avatars */}
      <div className="absolute top-[12%] left-[clamp(60px,14%,220px)]">
        <div className="w-[195.283px] h-[195.283px] rounded-full  shadow-xl overflow-hidden bg-[#fde8e8]">
          <img
            src="/3.png"
            alt="Community member"
            className="w-[195.283px] h-[195.283px] object-cover scale-110"
          />
        </div>
      </div>

      <div className="absolute top-[55%] left-[clamp(30px,7%,130px)]">
        <div className="w-[145px] h-[145px] rounded-full  shadow-xl overflow-hidden bg-[#fef9c3]">
          <img
            src="/1.png"
            alt="Community member"
            className="w-[145px] h-[145px] object-cover scale-110"
          />
        </div>
      </div>

      <div className="absolute top-[10%] right-[clamp(40px,8%,160px)]">
        <div className="w-[144.63px] h-[144.63px] rounded-full shadow-xl overflow-hidden bg-[#e2e8f0]">
          <img
            src="/5.png"
            alt="Community member"
            className="w-[144.63px] h-[144.63px] object-cover scale-110"
          />
        </div>
      </div>

      <div className="absolute top-[45%] right-[clamp(30px,6%,120px)]">
        <div className="w-[211.679px] h-[211.679px] rounded-full shadow-xl overflow-hidden bg-[#e0f2fe]">
          <img
            src="/4.png"
            alt="Community member"
            className="w-[211.679px] h-[211.679px] object-cover scale-110"
          />
        </div>
      </div>

      {/*  Main content  */}
      <div className="relative z-10 text-center max-w-[1728px] mx-auto px-6 md:px-[128px]">
        <h1 className="text-[#101828] text-center font-dm-sans text-[128px] font-semibold leading-[131px] tracking-[-3.84px] self-stretch mb-6">
          Connect. Share. Live
        </h1>

        <p className="text-[rgba(17,17,17,0.60)] text-center font-dm-sans text-[30px] font-normal leading-[30px] self-stretch mx-auto mb-12 max-w-4xl px-4">
          Join the Stikkly community to share workflows, attend exclusive
          events, and help us shape the future of creative collaboration
        </p>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex -space-x-3">
            {[
              { src: "/1.png", bg: "bg-[#fde8e8]", z: "z-[30]" },
              { src: "/4.png", bg: "bg-[#fef9c3]", z: "z-[20]" },
              { src: "/5.png", bg: "bg-[#e0f2fe]", z: "z-[10]" },
              { src: "/13.jpg", bg: "bg-[#e2e8f0]", z: "z-[0]" },
            ].map((a, i) => (
              <div
                key={i}
                className={`w-11 h-11 rounded-full border-[3px] border-white shadow-sm overflow-hidden ${a.bg} ${a.z}`}
              >
                <img
                  src={a.src}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <p className="font-semibold text-[#475569] font-sora text-[clamp(14px,1.2vw,17px)]">
            Join 50K + connects worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
