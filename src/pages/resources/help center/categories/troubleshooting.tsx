import React from "react";

const col1 = [
  {
    title: "General",
    items: [
      "Stikkly Desktop app not working on windows",
      "Error 404 when loading Stikkly files",
      "My files are not opening",
    ]
  },
  {
    title: "Audio",
    items: [
      "Does switching between accounts affects my files?",
      "Figma ipsum component variant main layer. Effect.",
      "Lorem ipsum dolor sit amet consectetur. Vulputate.",
      "Crypto ipsum bitcoin ethereum dogecoin litecoin.",
      "Office ipsum you must be muted. Initiative by get.",
      "Hipster ipsum tattooed brunch I'm baby. Dollar.",
      "Pirate ipsum arrgh bounty warp jack. Landlubber.",
    ]
  }
];

const col2 = [
  {
    title: "Fonts",
    items: [
      "Does switching between accounts affects my files?",
      "Figma ipsum component variant main layer. Effect.",
      "Lorem ipsum dolor sit amet consectetur. Vulputate.",
      "Crypto ipsum bitcoin ethereum dogecoin litecoin.",
      "Office ipsum you must be muted. Initiative by get.",
      "Hipster ipsum tattooed brunch I'm baby. Dollar.",
      "Pirate ipsum arrgh bounty warp jack. Landlubber.",
    ]
  },
  {
    title: "Images",
    items: [
      "Does switching between accounts affects my files?",
      "Figma ipsum component variant main layer. Effect.",
      "Lorem ipsum dolor sit amet consectetur. Vulputate.",
      "Crypto ipsum bitcoin ethereum dogecoin litecoin.",
      "Office ipsum you must be muted. Initiative by get.",
      "Hipster ipsum tattooed brunch I'm baby. Dollar.",
      "Pirate ipsum arrgh bounty warp jack. Landlubber.",
    ]
  }
];

const TroubleshootingPage: React.FC = () => {

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-16 px-6 md:px-[128px] mt-[294px] text-center">
        <div className="max-w-[1728px] mx-auto">
          <h1 className="text-[60px] md:text-[100px] font-bold text-[#101828] font-dm-sans tracking-tight">
            Troubleshooting
          </h1>
        </div>
      </section>

      {/* Resources list */}
      <section className="px-6 md:px-[128px] pb-[150px] mt-[122px]">
        <div className="max-w-[1728px] mx-auto">
          <h2 className="text-[32px] md:text-[50px] font-normal font-dm-sans text-[#0F0F0F]">
            Try these resources if you run into an issue
          </h2>

          <div className="flex flex-col md:flex-row gap-[60px] md:gap-[50px] lg:gap-[120px] mt-[83px]">
            {/* Column 1 */}
            <div className="flex-1 flex flex-col gap-[60px] md:gap-20">
              {col1.map((section) => (
                <div key={section.title} className="flex flex-col gap-6 md:gap-8">
                  <h3 className="text-[28px] md:text-[35px] font-normal font-dm-sans text-[#101828]">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-5 md:gap-6">
                    {section.items.map((item, index) => (
                      <li
                        key={index}
                        className="text-[18px] md:text-[20px] text-[#667085] cursor-pointer hover:underline font-dm-sans"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-[60px] md:gap-20">
              {col2.map((section) => (
                <div key={section.title} className="flex flex-col gap-6 md:gap-8">
                  <h3 className="text-[28px] md:text-[35px] font-normal font-dm-sans text-[#101828]">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-5 md:gap-6">
                    {section.items.map((item, index) => (
                      <li
                        key={index}
                        className="text-[18px] md:text-[20px] text-[#667085] cursor-pointer hover:underline font-dm-sans"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TroubleshootingPage;
