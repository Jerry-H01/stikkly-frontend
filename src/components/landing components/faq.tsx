import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Stikkly?",
    answer:
      "Stikkly is a visual workspace where creative thinking and task execution live together. It lets you brainstorm visually, then turn parts of that thinking into tasks without losing context along the way.",
  },
  {
    question: "How is this different from a task manager?",
    answer:
      "Unlike traditional task managers that force you into rigid lists, Stikkly lets you start freeform on a canvas and seamlessly transition into structured tasks when you're ready.",
  },
  {
    question: "Is Stikkly only for teams?",
    answer:
      "Not at all. Stikkly works great for solo creators, freelancers, and small teams alike. Whether you're managing your own projects or collaborating with others, it adapts to your workflow.",
  },
  {
    question: "Is Stikkly AI-first?",
    answer:
      "Yes — AI is woven into Stikkly's core. From smart suggestions while brainstorming to auto-generating task breakdowns, AI helps you move from fuzzy ideas to structured action faster.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "We take security seriously. Your data is encrypted at rest and in transit, and we never use your private workspace data to train our AI models without explicit permission.",
  },
  {
    question: "Can I invite others on the Free plan?",
    answer:
      "Absolutely. The free plan lets you invite collaborators so you can brainstorm and manage tasks together. Upgrade anytime to unlock more seats and advanced features.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-[#F5F5F5] px-6 md:px-[128px] flex justify-center">
      <div className="w-full max-w-[1728px] flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-[40px] md:text-[60px] font-normal text-[#1E1E1E] font-dm-sans leading-[1.1] tracking-tight">
            Frequently Asked <br />
            Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col w-full border-t-0">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#E5E5E5] group"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-6 text-left cursor-pointer outline-none"
                >
                  <span
                    className={`text-[18px] md:text-[24px] font-dm-sans transition-colors duration-200 ${
                      isOpen ? "font-semibold text-[#111]" : "font-normal text-[#696969] group-hover:text-[#111]"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    className="flex-shrink-0 ml-4 text-[24px] text-[#A3A3A3] font-light leading-none"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100 mb-6" : "max-h-0 opacity-0 mb-0"
                  }`}
                >
                  <p className="text-[#6E6E71] text-[16px] md:text-[24px] font-dm-sans leading-[1.6] pr-8">
                    {item.answer}
                  </p>
                </div> 
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
