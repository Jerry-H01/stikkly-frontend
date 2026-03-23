import React from "react";

const Trusted: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto px-6 md:px-[128px] max-w-[1728px] text-center cursor-pointer">
        <p className="text-gray-500 font-medium mb-12 tracking-wide  text-[40px]">
          Trusted by
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
          {/* Framer */}
          <div className="group transition-all duration-300 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Framer_logo.svg"
              alt="Framer"
              className="h-8"
            />
            <span className="text-2xl font-bold font-display text-gray-800 tracking-tight">
              Framer
            </span>
          </div>

          {/* Envato */}
          <div className="group transition-all duration-300 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/af/Envato_symbol.svg"
              alt="Envato"
              className="h-8"
            />
            <span className="text-2xl font-bold font-display text-[#81b441] tracking-tight">
              envato
            </span>
          </div>

          {/* Spotify */}
          <div className="group transition-all duration-300 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_with_text.svg"
              alt="Spotify"
              className="h-10"
            />
          </div>

          {/* Slack */}
          <div className="group transition-all duration-300 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
              alt="Slack"
              className="h-8"
            />
            <span className="text-2xl font-bold font-display text-gray-800 tracking-tight">
              slack
            </span>
          </div>

          {/* Mobbin */}
          <div className="group transition-all duration-300 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 flex items-center gap-3">
            <svg
              className="h-8"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 5H15V35H5V5Z" fill="currentColor" />
              <path d="M15 15H25V35H15V15Z" fill="currentColor" />
              <path d="M25 5H35V35H25V5Z" fill="currentColor" />
            </svg>
            <span className="text-2xl font-bold font-display text-gray-800 tracking-tight">
              Mobbin
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
