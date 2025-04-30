import React from 'react';
import { Button } from "@/components/ui/moving-borders";

const ThankYouSection: React.FC = () => {
  return (
    <section id="thank-you" className="py-10">
      <h1 className="heading text-center text-lg">
        Thank You <span className="text-purple">for Visiting!</span>
      </h1>

      <div className="mt-8 grid w-full grid-cols-1 gap-6 lg:grid-cols-1">
        <Button
          key="thank-you"
          borderRadius="1.25rem" // Reduced border radius
          className="flex-1 text-white dark:border-slate-800 border-neutral-200"
          duration={Math.floor(Math.random() * 10000 + 10000)}
        >
          <div className="flex flex-col gap-2 p-4 py-4 md:p-4 lg:flex-row lg:items-center lg:p-6">
            <div className="text-center lg:text-start">
              <h1 className="text-base font-semibold md:text-lg text-white">
                I truly appreciate you taking the time to explore my website.
              </h1>
              <p className="mt-2 text-sm font-medium text-white/80">
                Your support and interest mean a lot to me!
              </p>
            </div>
          </div>
        </Button>
      </div>
    </section>
  );
};

export default ThankYouSection;
