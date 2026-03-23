import React, { useState } from "react";


/* types */
interface Plan {
  name: string;
  badge?: string;
  monthlyPrice: number;
  annualPrice: number;
  per: string;
  description?: string;
  subDescription?: string;
  subDescription2?: string;
  aiLabel?: string;
  aiLabelAnnual?: string;
  featured?: boolean;
  ctaLabel: string;
  extraLink?: string;
  features: string[];
}

/* data */
const plans: Plan[] = [
  {
    name: "Free",
    badge: " For 1 User",
    monthlyPrice: 0,
    annualPrice: 0,
    per: "forever free ",
    ctaLabel: "Select plan",
    features: [
      "25 AI credits / mo",
      "3 boards",
      "Unlimited notes",
      "Personal tasks",
      "View-only board sharing",
      "PDF, JPEG, PNG attachments",
      "500MB storage",
    ],
  },
  {
    name: "Pro",
    badge: " For 1 User",
    monthlyPrice: 12,
    annualPrice: 10,
    per: "per month ",
    description: "Freelancer",
    subDescription: "For independent creators running their own client world.",
    aiLabel: "500 AI Power Actions / m",
    aiLabelAnnual: "500 AI Power Actions / m",
    ctaLabel: "Select plan",
    features: [
      "Everything in Free, plus",
      "Real-time team collaboration",
      "Assign tasks to external guest",
      "Client view-only links",
      "Priority support",
      "10GB storage",
    ],
  },
  {
    name: "Studio",
    badge: "For teams up to 6 people",
    monthlyPrice: 49,
    annualPrice: 39,
    per: "per month · flat",
    description: "Small Agency",
    subDescription:
      "Where the real work happens. Built for teams who care about context.",
    subDescription2: "For teams that plan, collaborate, and execute together.",
    aiLabel: "1,500 AI power actions / m",
    aiLabelAnnual: "1,500 AI power actions / m",
    featured: true,
    ctaLabel: "Select plan",
    features: [
      "Everything in Pro, plus",
      "Real-time team collaboration",
      "Centralized project management",
      "Client view-only links",
      "Priority support",
      "20GB storage/person",
    ],
  },
  {
    name: "Studio plus",
    badge: "For teams up to 15 people",
    monthlyPrice: 99,
    annualPrice: 79,
    per: "per month · flat",
    description: "Mid Agency",
    subDescription:
      "For growing agencies running multiple client projects at once.",
    subDescription2: "For teams that plan, collaborate, and execute together.",
    aiLabel: "2,500 AI Power Actions / m",
    aiLabelAnnual: "2,500 AI Power Actions / m",
    ctaLabel: "Select plan",
    extraLink: "Contact Sales",
    features: [
      "Everything in Studio, plus",
      "Custom branding on client side",
      "Dedicated support",
      "Advanced admin controls",
      "50GB storage/person",
    ],
  },
];

/* sub-components */



function PricingCard({ plan, isAnnual }: { plan: Plan; isAnnual: boolean }) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const aiLabel = isAnnual ? plan.aiLabelAnnual : plan.aiLabel;

  return (
    <div
      className={`
        flex flex-col w-[328.257px] p-[23.486px] items-start gap-[8.388px] shrink-0 self-stretch rounded-[19.839px] border-[1.019px] transition-all duration-300
        ${
          plan.featured
            ? "bg-[#533BE5] border-[#533BE5] text-white shadow-xl scale-[1.02]"
            : "bg-[#FFF] border-[#C3C3C3] text-[#101828]"
        }
      `}
    >
   
      <div className="flex flex-col min-h-[110px] w-full">
        {/* Plan name */}
        <h3
          className={`text-[36px] font-normal mb-2 font-inter ${plan.featured ? "text-white" : "text-[#000]"}`}
        >
          {plan.name}
        </h3>

        {/* Badge */}
        {plan.badge && (
          <span
            className={`
              self-start text-[11px] font-medium px-2 py-1 rounded-[6px] mb-2 border
              ${
                plan.featured
                  ? "border-white/30 text-white"
                  : "border-[#C3C3C3] text-[#111]"
              }
            `}
          >
            {plan.badge}
          </span>
        )}

        {/* Price */}
        <div className="flex items-end gap-1 mb-1 mt-auto">
          <span
            className={`text-[48px] font-bold leading-none tracking-[-0.02em] font-dm-sans ${plan.featured ? "text-white" : "text-[#000]"}`}
          >
            ${price}
          </span>
        </div>
        <p
          className={`text-[13px] font-dm-sans mb-[20px] ${plan.featured ? "text-white/70" : "text-[#667085]"}`}
        >
          {plan.per}
        </p>
      </div>

      {/* CTA button */}
      <button
        className={`
          w-full py-[10px] rounded-[6px] font-medium text-[15px] transition-all duration-200 mb-6 font-dm-sans
          ${
            plan.featured
              ? "bg-white text-[#533BE5] hover:bg-[#F9F5FF]"
              : "bg-[#000] text-white hover:bg-[#333]"
          }
        `}
      >
        {plan.ctaLabel}
      </button>

      {/* Extra link */}
      {plan.extraLink && (
        <p className={`text-center text-[13px] underline cursor-pointer mb-6 w-full font-dm-sans ${plan.featured ? "text-white" : "text-[#111]"}`}>
          {plan.extraLink}
        </p>
      )}

        {/* Description block */}
        <div
          className={`mb-4 text-[14px] flex flex-col gap-3 font-dm-sans leading-[1.4] ${plan.featured ? "text-white/80" : "text-[#111]"}`}
        >
          {plan.description && <p>{plan.description}</p>}
          {plan.subDescription && <p>{plan.subDescription}</p>}
          {plan.subDescription2 && <p>{plan.subDescription2}</p>}
        </div>

        {/* AI label pill */}
        {aiLabel && (
          <div
            className={`
              inline-flex self-start items-center text-[13px] font-medium rounded-[6px] px-3 py-1.5 mb-6 border font-dm-sans
              ${plan.featured ? "border-white/20 text-white" : "border-[#71717A] text-[#111]"}
            `}
          >
            {aiLabel}
          </div>
        )}

        {/* Feature list */}
        <ul className="flex flex-col gap-4 w-full font-dm-sans">
          {plan.features.map((feat) => {
            const isNoIcon = feat.startsWith("Everything in");
            return (
              <li
                key={feat}
                className={`flex items-start gap-3 ${isNoIcon ? "mb-1" : ""}`}
              >
                {!isNoIcon && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={plan.featured ? "white" : "black"}
                    strokeWidth="1.5"
                    className="shrink-0 mt-[1px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                <span
                  className={`text-[14px] ${plan.featured ? "text-white/90" : isNoIcon ? "text-[#667085]" : "text-[#111]"}`}
                >
                  {feat}
                </span>
              </li>
            );
          })}
        </ul>
    </div>
  );
}

/* main page  */
const BillingsPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-16 px-6 md:px-[128px] mt-[294px] text-center">
        <div className="max-w-[1728px] mx-auto">
          <h1 className="text-[128px] font-extrabold text-[#101828] tracking-[-2px] font-dm-sans leading-tight">
            Guide to billing
          </h1>
        </div>
      </section>

      {/* How billing works */}
      <section className="px-6 md:px-[128px] mt-[200px]">
        <div className="max-w-[1728px] mx-auto">
          <h2 className="text-[50px] font-semibold text-[#0F0F0F] mb-[17px]">
            How billing works at Stikkly
          </h2>
          <p className="text-[25px] text-[#111] leading-relaxed max-w-[1469px]">
            Your Stikkly subscription cost is determined by some key factors:
            your plan type and the number of Full, Dev, and Collab seats in your
            plan. You have access to these seats for the duration of your
            billing term.
          </p>
        </div>
      </section>

      {/* Toggle */}
      <div className="flex justify-center mt-[100px] mb-[70px]">
        <div className="inline-flex items-center rounded-[10px]  bg-[#F9FAFB] gap-1">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-3 rounded-[10px] text-[18px] font-inter font-medium transition-all ${
              !isAnnual
                ? "bg-white text-[#101828] shadow-sm border border-[#E4E7EC]"
                : "text-[#667085]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-3 rounded-[10px] text-[18px] font-inter font-medium transition-all ${
              isAnnual
                ? "bg-white text-[#101828] shadow-sm border border-[#E4E7EC]"
                : "text-[#667085]"
            }`}
          >
            Annually
          </button>
        </div>
      </div>

      {/* Pricing cards */}
      <section className="px-6 md:px-[128px] mb-20">
        <div className="max-w-[1728px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} />
            ))}
          </div>
        </div>
      </section>

      {/* Select a plan */}
      <section className="px-6 md:px-[128px] mb-20">
        <div className="max-w-[1728px] mx-auto">
          <h2 className="text-[50px] font-normal font-dm-sans text-[#0F0F0F] mb-[17px]">
            Select a plan
          </h2>
          <p className="text-[25px] font-normal font-dm-sans text-[#111] mb-4 leading-relaxed max-w-[960px]">
            First, you'll need to create an account and select which plan fits
            your needs.
          </p>
          <ul className="list-disc list-inside flex flex-col gap-2 ">
            <li className="text-[25px] font-normal font-dm-sans text-[#111]">
              <span className="font-medium text-[#101828]">
                Create a Stikkly account:
              </span>{" "}
              Get started with Figma by creating an account.
            </li>
            <li className="text-[25px] font-normal font-dm-sans text-[#111]">
              <span className=" cursor-pointer">
                Stikkly <span className=" underline text-[25px] font-normal font-dm-sans text-[#111]">plans and features</span>
              </span>{" "}
              See an overview of the features available on each of Stikkly's
              plans.
            </li>
          </ul>
        </div>
      </section>

      {/* Was this helpful */}
      <section className="px-6 md:px-[128px] pb-24">
        <div className="max-w-[1728px] mx-auto">
          
            <h3 className="text-[50px] font-dm-sans text-[#101828] mb-6">
              Was this helpful?
            </h3>
            <div className="flex items-center gap-6">
              <button
                id="helpful-yes"
                onClick={() => setFeedback("yes")}
                className={`flex justify-center items-center w-[311px] h-[72px] px-[24.084px] py-[19.568px] gap-[15.053px] rounded-[12.042px] border-[1px] shadow-[inset_0_1.505px_1.355px_0_rgba(255,255,255,0.28)] text-[18px] font-medium font-dm-sans transition-all ${
                  feedback === "yes"
                    ? "bg-[#7F56D9] border-[#7F56D9] text-white"
                    : "bg-transparent border-[rgba(0,0,0,0.10)] text-[#344054] hover:border-[#7F56D9] hover:text-[#7F56D9]"
                }`}
              >
                Yes
              </button>
              <button
                id="helpful-no"
                onClick={() => setFeedback("no")}
                className={`flex justify-center items-center w-[311px] h-[72px] px-[24.084px] py-[19.568px] gap-[15.053px] rounded-[12.042px] border-[1px] shadow-[inset_0_1.505px_1.355px_0_rgba(255,255,255,0.28)] text-[18px] font-medium font-dm-sans transition-all ${
                  feedback === "no"
                    ? "bg-[#F04438] border-[#F04438] text-white"
                    : "bg-transparent border-[rgba(0,0,0,0.10)] text-[#344054] hover:border-[#F04438] hover:text-[#F04438]"
                }`}
              >
                No
              </button>
            </div>
            {feedback && (
              <p className="mt-4 text-[14px] text-[#667085] animate-fade-in">
                {feedback === "yes"
                  ? "Thanks for the feedback!"
                  : "Sorry to hear that. We'll work on improving this article."}
              </p>
            )}
          </div>
       
      </section>
    </main>
  );
};

export default BillingsPage;
