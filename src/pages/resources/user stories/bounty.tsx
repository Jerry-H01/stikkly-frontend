import React from "react";

const Bounty: React.FC = () => {
  return (
    <section className="bg-[#FEFBF0] py-24 px-6 md:px-[128px]">
      <div className="max-w-[1728px] mx-auto flex flex-col items-start">
        {/* Main Title */}
        <h2 className="text-[50px] font-semibold text-[#0F0F0F leading-[1.1] tracking-[-1.92px] font-dm-sans mb-16 max-w-4xl">
          Pirate ipsum arrgh bounty warp jack.
        </h2>

        {/* Content Section: How Stikkly helped */}
        <div className="mb-16 max-w-5xl">
          <h3 className="text-[30px] font-normal text-[#111] mb-6 font-dm-sans">
            How Stikkly helped their teams achieve their goal
          </h3>
          <div className="flex flex-col gap-6">
            <p className="text-[25px] text-[#111] font-normal leading-[32px]">
              Pirate ipsum arrgh bounty warp jack. Driver man tails red furl me
              spirits. Tea plate log shot timbers lugsail lass. Measured scourge
              cat jack davy clipper deck pillage tea spot. Pillage scurvy
              spirits topmost pounders seas six coast anchor. Lateen boat on
              spirits bilge driver blossom yawl lateen man. <br />
              Aft road corsair gun fer a scurvy reef grog gold. Spanker shiver
              pinnace hempen blimey clipper. Driver sloop sail warp shot
              hearties plate. Smartly ketch ahoy tales chain league ahoy gold
              fer. Killick dock run salmagundi crimp yarr pink pinnace sheet. Of
              grog across lugsail crow's lanyard gun dock dock tender. Belay
              pounders rig hands down.
            </p>
          </div>
        </div>

        {/* Content Section: Results */}
        <div className="mb-16 max-w-5xl">
          <h3 className="text-[25px] font-semibold text-[#111] mb-6 font-dm-sans">
            Results
          </h3>
          <p className="text-[25px] text-[#111] font-normal leading-[32px]">
            Pirate ipsum arrgh bounty warp jack. Driver man tails red furl me
            spirits. Tea plate log shot timbers lugsail lass. Measured scourge
            cat jack davy clipper deck pillage tea spot. Pillage scurvy spirits
            topmost pounders seas six coast anchor. Lateen boat on spirits bilge
            driver blossom yawl lateen man.
          </p>
        </div>

        {/* Footer: Envato Logo */}
        <div className="w-full flex justify-end mt-12 items-center gap-2">
          <img
            src="/envato.png"
            alt="Envato Symbol"
            className="h-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Bounty;
