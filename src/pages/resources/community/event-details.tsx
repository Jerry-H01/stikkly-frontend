import React from "react";
import { useParams, Link } from "react-router-dom";
import { Coffee, Wifi, Car, MapPin, ChevronLeft } from "lucide-react";
import { events } from "./event-data";

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Event not found</h1>
        <Link
          to="/resources/community"
          className="text-indigo-600 hover:underline"
        >
          Back to Community
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-20 px-6 md:px-[128px] mt-[150px]">
      <div className="max-w-[1728px] mx-auto">
        {/* Back Link */}
        <Link
          to="/resources/community"
          className="flex items-center gap-2 text-[#667085] hover:text-[#101828] font-semibold mb-12 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Community</span>
        </Link>

        {/* Title */}
        <h1 className="text-[128px] font-bold text-[#101828] text-center mb-12 font-dm-sans leading-[131px] tracking-[-3.84px]">
          {event.title}
        </h1>

        {/* Image Grid */}
        <div className="flex flex-col md:flex-row gap-[22.5px] mb-20">
          <div className="w-full md:w-[968.7px] h-[473.4px] flex-shrink-0">
            <img 
              src={event.gallery[0] || event.image} 
              alt={event.title} 
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
          <div className="flex flex-col gap-[22.5px] flex-1">
            <div className="h-[226px] self-stretch w-full">
              <img 
                src={event.gallery[1] || event.image} 
                alt={`${event.title} gallery 1`} 
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
            <div className="h-[224.8px] self-stretch w-full">
              <img 
                src={event.gallery[2] || event.image} 
                alt={`${event.title} gallery 2`} 
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-20">
          {/* Left Column */}
          <div className="w-full md:w-1/3 flex flex-col gap-12">
            {/* Event Overview Card */}
            <div className="bg-white border border-[#EAECF0] rounded-[16px] p-8">
              <h3 className="text-[24px] font-bold text-[#101828] mb-6">
                Event Overview
              </h3>
              <p className="text-[#475467] text-[18px] leading-[28px] mb-8">
                {event.description.substring(0, 150)}...
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-[#475467] text-[16px]">
                  <Coffee className="w-5 h-5" />
                  <span>Breakfast</span>
                </div>
                <div className="flex items-center gap-2 text-[#475467] text-[16px]">
                  <Wifi className="w-5 h-5" />
                  <span>Free WIFI</span>
                </div>
                <div className="flex items-center gap-2 text-[#475467] text-[16px]">
                  <Car className="w-5 h-5" />
                  <span>Parking</span>
                </div>
              </div>

            </div>

            {/* Find place on maps */}
            <div className="flex flex-col">
              <h3 className="text-[24px] font-bold text-[#101828] mb-6">
                Find place on maps
              </h3>
              <div className="w-full h-[240px] rounded-[24px] overflow-hidden mb-6 border border-[#EAECF0]">
                <img
                  src="/map.png"
                  alt="Map"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2 text-[#475467] text-[18px]">
                <MapPin className="w-5 h-5" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: About the event */}
          <div className="w-full md:w-2/3">
            <h2 className="text-[24px] font-bold text-[#101828] mb-6">
              About the event
            </h2>
            <div className="space-y-8">
              <p className="text-[#475467] text-[20px] leading-[30px] font-normal">
                {event.description}
              </p>
              <p className="text-[#475467] text-[20px] leading-[30px] font-normal">
                Lorem ipsum dolor sit amet consectetur. Pharetra pellentesque in
                non elit diam sed. Dictum sed pellentesque a cras egestas dui
                amet. Euismod dolor cursus amet mollis facilisis arcu. Venenatis
                augue ut porta tempus pulvinar ut. Enim facilisi est orci enim
                magna euismod senectus quam praesent. Porttitor dui nulla vel
                sit diam sodales sem cras. Ut vulputate tristique nunc dictum
                pellentesque amet mattis malesuada.
              </p>
              <button className="text-[#7F56D9] font-bold text-[18px] hover:underline">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
