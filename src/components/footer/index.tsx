import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col items-center">
      {/* Top CTA Banner */}
      <div className="w-full bg-[#1388F2] pt-20 pb-0 md:pt-32 relative overflow-hidden flex justify-center">
        <div className="w-full max-w-[1728px] mx-auto px-6 md:px-[128px] flex flex-col md:flex-row items-center justify-between relative z-10 pb-20 md:pb-32">
          <div className="max-w-[540px] text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-[40px] md:text-[60px] text-[#F5F5F5] font-bold font-dm-sans tracking-tight text-white mb-6 leading-[1.1]">
              Sign Up Now
            </h2>
            <p className="text-white/90 text-[18px] md:text-[20px] mb-10 leading-relaxed font-inter md:pr-4">
              Turn brainstorms into clear, trackable work with all the
              context your team needs to build it right the first time.
            </p>
            <button className="bg-[#0A0A0A] text-white px-6 py-4 rounded-xl font-inter font-medium hover:bg-black/80 transition-colors flex items-center gap-4 w-fit group">
              <span className="text-[16px] md:text-[23px]">Get started for free</span>
              <div className="bg-gradient-to-b rounded-[8px] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-inner">
                 <img src="/image 44.svg" alt="" />
              </div>
            </button>
          </div>
        </div>
        
        {/* Illustration Placeholder */}
        <div className="absolute right-0 bottom-0 md:right-10 lg:right-32 w-[300px] md:w-[500px] h-full pointer-events-none flex items-end justify-center">
           <img src="/footer-illustration.svg" alt="" className="w-full h-auto max-h-[120%] object-contain object-bottom pointer-events-auto" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full bg-[#F5F5F5] pt-20 pb-12 flex justify-center">
        <div className="w-full max-w-[1728px] mx-auto px-6 md:px-[128px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
            {/* Logo & Description */}
            <div className="md:col-span-5 flex flex-col items-start pr-10">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.svg" alt="Stikkly" className="h-[40px]" />
                {/* <span className="text-[32px] font-bold font-dm-sans text-[#111]">Stikkly</span> */}
              </div>
              <p className="text-[#111] text-[16px] md:text-[20px] leading-[1.6] max-w-[320px] font-dm-sans mb-8">
                An environment that transforms your creative chaos into clear
                direction
              </p>
              <div className="flex items-center gap-4 text-[#111]">
                {/* Facebook */}
                <a href="#" className="hover:text-gray-600 transition-colors">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="hover:text-gray-600 transition-colors">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div className="md:col-span-2 flex flex-col">
              <h3 className="text-[#111] font-dm-sans font-bold mb-6 text-[18px]">
                Product
              </h3>
              <ul className="space-y-4 flex flex-col text-[16px] font-inter">
                <li><a href="#" className="text-[#464646] hover:text-[#111] transition-colors">Home</a></li>
                <li><a href="#" className="text-[#464646] hover:text-[#111] transition-colors">Features</a></li>
                <li><a href="#" className="text-[#464646] hover:text-[#111] transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="md:col-span-2 flex flex-col">
              <h3 className="text-[#111] font-dm-sans font-bold mb-6 text-[18px]">
                Company
              </h3>
              <ul className="space-y-4 flex flex-col text-[16px] font-inter">
                <li><a href="#" className="text-[#464646] hover:text-[#111] transition-colors">Mission</a></li>
                <li><a href="#" className="text-[#464646] hover:text-[#111] transition-colors">Help Center</a></li>
                <li><a href="#" className="text-[#464646] hover:text-[#111] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="md:col-span-2 flex flex-col">
              <h3 className="text-[#111] font-dm-sans font-bold mb-6 text-[18px]">
                Legal
              </h3>
              <ul className="space-y-4 flex flex-col text-[16px] font-inter">
                <li><a href="#" className="text-[#464646] hover:text-[#111] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-[#464646] hover:text-[#111] transition-colors">Terms Of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#D4D4D4] pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <p className="text-[14px] font-inter text-[#464646]">
              © 2026 Stikkly. All rights reserved
            </p>
            <p className="text-[14px] font-inter text-[#464646]">
              Made with ❤️ for calm, clear execution.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
