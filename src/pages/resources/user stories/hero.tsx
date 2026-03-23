import React from "react";

const UserStoriesHero: React.FC = () => {
  return (
    <section className="bg-white pt-[270px] pb-24 px-6 md:px-[128px]">
      <div className="max-w-[1728px] mx-auto flex flex-col items-center">
        {/* Title */}
        <h1 className="text-[128px] font-semibold text-[#101828] text-center mb-8 leading-[131px] tracking-[-3.84px] font-dm-sans">
          User Stories
        </h1>
        {/* Subtitle */}
        <p className="text-[24px] text-[#475467] text-center max-w-4xl leading-[36px] font-normal">
          Hear how teams and individuals use Stikkly to build better products, together.
        </p>
      </div>
    </section>
  );
};

export default UserStoriesHero;
