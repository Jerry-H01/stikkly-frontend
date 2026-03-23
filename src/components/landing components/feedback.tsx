import React from "react";

const Feedback: React.FC = () => {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-24 pb-28 md:pb-32 px-6 md:px-[128px] flex flex-col items-center justify-center">
      <div className="w-full max-w-[1728px] flex flex-col gap-16 md:gap-32">
        {/* Testimonial 1 */}
        <div className="flex flex-col gap-6 max-w-[800px]">
          <div className="">
            <img
              src="/Testimonial-Profile Picture.svg"
              alt="icon"
              className="w-[90px] h-[90px] object-contain"
            />
          </div>

          <h2 className="text-[32px] md:text-[60px] font-normal text-[#111] font-dm-sans leading-[1.05] tracking-tight">
            Launched 3 campaigns faster <br className="hidden md:block" /> with zero miscommunication
          </h2>

          <div className="flex items-center gap-4 mt-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400"
              alt="Leticia"
              className="w-[75px] h-[75px] border-2 border-white rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-[#111] text-[30px] font-manrope">
                Leticia Kutch
              </span>
              <span className="text-[20px] text-[#8C8C8C] font-manrope">
                Head of Marketing
              </span>
            </div>
          </div>
        </div>

        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 w-full flex justify-start">
            <img
              src="/Frame1000003122.svg"
              alt="Start Messy"
              className="w-full max-w-[500px] object-contain object-left"
            />
          </div>
          <div className="flex-1 w-full flex flex-col gap-4">
            <h3 className="text-[32px] md:text-[60px] font-medium text-[#111] font-dm-sans">
              Start Messy. End With Clarity.
            </h3>
            <p className="text-[#464646] text-[18px] md:text-[30px] font-normal leading-normal tracking-[-0.264px] font-dm-sans w-full">
              Drop ideas on a canvas. Organize them visually. Turn sticky notes
              into tasks without losing the thinking that went into them.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 w-full flex flex-col gap-4">
            <h3 className="text-[32px] md:text-[60px] font-medium text-[#111] font-dm-sans">
              Clear Handoffs
            </h3>
            <p className="text-gray-600 text-[18px] md:text-[30px] font-normal leading-normal tracking-[-0.264px] font-dm-sans w-full">
              Assign work with everything the next person needs. No "Wait, what
              did you mean?" moments.
            </p>
          </div>
          <div className="flex-1 w-full flex justify-end">
            <img
              src="/Frame-1000003177.svg"
              alt="Clear Handoffs"
              className="w-full max-w-[400px] rounded-[16px] object-contain object-right border border-[#E5E5E5]"
            />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 w-full flex justify-start">
            <img
              src="/every-p.svg"
              alt="Every Project Workspace"
              className="w-full max-w-[440px] object-contain object-left"
            />
          </div>
          <div className="flex-1 w-full flex flex-col gap-6">
            <h3 className="text-[32px] md:text-[60px] font-medium text-[#111] font-dm-sans leading-[1.05] tracking-tight">
              Every Project. Every Team. <br />
              One Workspace. 
            </h3>

            <p className="text-[#464646] text-[18px] md:text-[30px] font-normal leading-[1.6] max-w-[600px]">
              Organize teams and projects in clear spaces so nothing gets lost
              from idea to execution.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 w-full flex justify-start">
            <img
              src="/Frame-1000003177.svg"
              alt="Context Preservation"
              className="w-full max-w-[480px] object-contain object-left rounded-[16px] border border-[#E5E5E5]"
            />
          </div>
          <div className="flex-1 w-full flex flex-col gap-4">
            <h3 className="text-[32px] md:text-[60px] font-medium text-[#111] font-dm-sans leading-[1.05] tracking-tight">
              Context Preservation
            </h3>
            <p className="text-[#464646] text-[18px] md:text-[30px] font-normal leading-[1.6] max-w-[600px]">
              Briefs, mood boards, references attached to tasks. Context doesn't
              get lost when work moves.
            </p>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 w-full flex flex-col gap-4">
            <h3 className="text-[32px] md:text-[60px] font-medium text-[#111] font-dm-sans leading-[1.05] tracking-tight">
              Real-time collaboration
            </h3>
            <p className="text-[#464646] text-[18px] md:text-[30px] font-normal leading-[1.6] max-w-[600px]">
              See who's working on what in real-time. Comment, review, and
              approve faster than ever.
            </p>
          </div>
          <div className="flex-1 w-full flex justify-end">
            <img
              src="/real.svg"
              alt="Real time collaboration"
              className="w-[full] max-w-[480px] object-contain object-right"
            />
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col gap-6 w-[1330px] mt-10">
          <div className="">
            <img
              src="/Testimonial-Profile Picture.svg"
              alt="icon"
              className="w-[90px] h-[90px] object-contain"
            />
          </div>

          <h2 className="text-[32px] md:text-[60px] font-normal text-[#111] font-dm-sans leading-[1.05] tracking-tight">
            The relief of not having to repeat myself is worth <br className="hidden md:block" /> every penny.
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

export default Feedback;
