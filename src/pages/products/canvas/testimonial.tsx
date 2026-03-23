import React from "react";

const Testimonial: React.FC = () => {
  return (
    <section className="w-[1330px] bg-white py-24 md:py-32 flex justify-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-[128px] max-w-[1728px]">
        <div className="flex flex-col gap-6 max-w-[800px] mt-10">
          <div className="">
            <img
              src="/Testimonial-Profile Picture.svg"
              alt="icon"
              className="w-[90px] h-[90px] object-contain"
            />
          </div>

          <h2 className="text-[32px] md:text-[60px] font-normal text-[#111] font-dm-sans leading-[1.05] tracking-tight ">
            The relief of not having to repeat myself <br className="hidden md:block" /> is worth every penny.
          </h2>

          <div className="flex items-center gap-4 mt-2">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=400&h=400"
              alt="James Aang"
              className="w-[75px] h-[75px] border-2 border-white rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-[#111] text-[30px] font-manrope">
                James Aang
              </span>
              <span className="text-[20px] text-[#8C8C8C] font-manrope">
                Creative Lead
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;