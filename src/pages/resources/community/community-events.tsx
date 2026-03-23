import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";


import { events } from "./event-data";

const CommunityEvents: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-[128px] mt-[150px]">
      <div className="max-w-[1728px] mx-auto">
        <div className="mb-16 text-left">
          <h2 className="text-[30px] font-bold text-[#101828] mb-6">
            Community Events
          </h2>
          <p className="text-[#475467] text-[20px] font-normal">
            Check out upcoming and past events organized by Stickkly
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="group border-b border-[#EAECF0] pb-12 last:border-0"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Image Placeholder */}
                <Link to={`/resources/community/event-details/${event.id}`} className="w-full md:w-[251px] h-[209px] bg-[#F2F4F7] rounded-none flex-shrink-0 cursor-pointer overflow-hidden">
                  <img src={event.image} alt="Event preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>

                <div className="flex flex-col pt-1">
                  <Link to={`/resources/community/event-details/${event.id}`}>
                    <h3 className="flex flex-col justify-center self-stretch h-[40px] text-[#000] font-dm-sans text-[40px] font-semibold leading-[24px] tracking-[-1.2px] mb-6 hover:text-[#7F56D9] transition-colors cursor-pointer">
                      {event.title}
                    </h3>
                  </Link>



                  <p className="flex flex-col justify-center self-stretch h-[104px] text-[rgba(17,17,17,0.60)] font-dm-sans text-[20px] font-normal leading-[30px] tracking-[-0.6px] mb-8 max-w-5xl">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-[16px]">
                    <span className="flex items-center justify-center py-[2px] px-[10px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-medium text-[14px]">
                      {event.tag}
                    </span>

                    <span className="text-[18px] text-[#475467] font-normal ml-2">
                      {event.date}
                    </span>
                    <span className="text-[#475467]">•</span>
                    <span className="text-[18px] text-[#475467] font-normal">
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-24 pt-12 border-t border-[#EAECF0] flex items-center justify-between">
          <button className="flex items-center gap-2 text-[#667085] hover:text-[#101828] font-semibold transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-1">
            {[1, 2, 3, "...", 8, 9, 10].map((page, idx) => (
              <button
                key={idx}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-all ${
                  page === 1
                    ? "bg-[#F9F5FF] text-[#7F56D9]"
                    : "text-[#667085] hover:bg-slate-50"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 text-[#667085] hover:text-[#101828] font-semibold transition-colors">
            <span>Next</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityEvents;
