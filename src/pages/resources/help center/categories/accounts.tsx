import React, { useState } from "react";

const AccountsPage: React.FC = () => {
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);

  return (
    <main className="bg-white min-h-screen">
      <section className="pt-16 pb-16 px-6 md:px-[128px] mt-[126px] text-center">
        <div className="max-w-[1728px] mx-auto">
          <h1 className="text-[56px] md:text-[72px] font-extrabold text-[#101828] tracking-[-2px] font-dm-sans leading-tight">
            Accounts
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-[128px] mb-16">
        <div className="max-w-[1728px] mx-auto">
          <h2 className="text-[22px] font-bold text-[#101828] mb-3">
            Managing your account
          </h2>
          <p className="text-[15px] text-[#475467] leading-relaxed max-w-[760px]">
            Your Stikkly account is your home base for all your projects, teams,
            and settings. Learn how to set up, update, and manage your account
            here.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-[128px] pb-24">
        <div className="max-w-[1728px] mx-auto">
          <div className="border-t border-[#E4E7EC] pt-10">
            <h3 className="text-[20px] font-bold text-[#101828] mb-6">
              Was this helpful?
            </h3>
            <div className="flex items-center gap-6">
              <button
                id="accounts-helpful-yes"
                onClick={() => setFeedback("yes")}
                className={`px-6 py-2.5 rounded-full border text-[14px] font-medium transition-all ${
                  feedback === "yes"
                    ? "bg-[#7F56D9] border-[#7F56D9] text-white"
                    : "border-[#D0D5DD] text-[#344054] hover:border-[#7F56D9] hover:text-[#7F56D9]"
                }`}
              >
                Yes
              </button>
              <button
                id="accounts-helpful-no"
                onClick={() => setFeedback("no")}
                className={`px-6 py-2.5 rounded-full border text-[14px] font-medium transition-all ${
                  feedback === "no"
                    ? "bg-[#F04438] border-[#F04438] text-white"
                    : "border-[#D0D5DD] text-[#344054] hover:border-[#F04438] hover:text-[#F04438]"
                }`}
              >
                No
              </button>
            </div>
            {feedback && (
              <p className="mt-4 text-[14px] text-[#667085]">
                {feedback === "yes"
                  ? "Thanks for the feedback! 🎉"
                  : "Sorry to hear that. We'll work on improving this article."}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccountsPage;
