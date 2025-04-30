import Image from "next/image";
import { Button } from "@/components/ui/moving-borders";
import { workExperience } from "@/data";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-6 sm:py-8 md:py-10 flex justify-center items-center min-h-screen"
    >
      <div className="w-full max-w-4xl flex flex-col items-center justify-center">
        <h1 className="heading text-sm sm:text-base md:text-lg text-center mb-6">
          My <span className="text-purple">Experience</span>
        </h1>

        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center">
          {workExperience.map((experience) => (
            <Button
              key={experience.id}
              borderRadius="1rem"
              className="flex-1 border-neutral-200 text-white dark:border-slate-800"
              duration={Math.floor(Math.random() * 10000 + 10000)}
            >
              <div className="flex flex-col gap-2 p-3 sm:p-4 md:p-5 lg:flex-row lg:items-center lg:p-5">
                <Image
                  width={50}
                  height={45}
                  src={experience.thumbnail}
                  alt={experience.title}
                  className="w-14 sm:w-16 md:w-18 lg:w-20"
                />

                <div className="lg:ms-3 flex-1">
                  <h1 className="text-start text-xs sm:text-sm md:text-md font-semibold">
                    {experience.title}
                  </h1>
                  <p className="mt-1 text-start text-xs sm:text-sm md:text-sm font-medium text-white-100">
                    {experience.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
