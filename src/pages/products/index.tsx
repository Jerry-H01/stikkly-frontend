import React from "react";
import Tools from "../../components/products components/tools";
import ProductFeatures from "../../components/products components";

const ProductPage: React.FC = () => {
  return (
    <>
      <div className="w-full bg-[#F3F3F3] flex flex-col items-center relative dotted-bg pt-48 pb-28 overflow-visible">
        <div className="text-center w-full max-w-[1728px] px-6 md:px-[128px] z-10">
          <h1 className="font-montaga text-[48px] md:text-[120px] text-[#111] text-stroke-lb tracking-[-2.4px] font-normal leading-[1.1] mb-8">
            A visual workspace for thinking and building
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#6B6B6B] font-sans max-w-2xl mx-auto px-4">
            Connect ideation, planning, and collaboration.
          </p>
        </div>
        <Tools />
      </div>
      <ProductFeatures />
    </>
  );
};

export default ProductPage;
