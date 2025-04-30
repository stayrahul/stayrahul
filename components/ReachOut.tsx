import { MagicButton } from "@/components/ui/magic-button";
import { FaPaperPlane } from "react-icons/fa6";

export const ReachOut = () => {
  return (
    <section className="flex flex-col items-center justify-center py-8 px-6">
      {/* Heading */}
      <h2 className="heading text-center text-xl sm:text-2xl md:text-3xl lg:max-w-[50vw] mb-3">
        Ready to take <span className="text-purple">your</span> digital presence
        to the next level?
      </h2>

      {/* Description */}
      <p className="text-center text-white-200 text-sm sm:text-base md:text-lg mb-4">
        Reach out today and let&apos;s discuss how I can help you achieve your
        goals.
      </p>

      {/* Contact Button */}
      <a
        href="https://wa.me/+9779822228722"
        target="_blank"
        rel="noreferrer noopener"
      >
        <MagicButton
          title="Let's get in touch"
          icon={<FaPaperPlane />}
          position="right"
        />
      </a>
    </section>
  );
};
