import Image from "next/image";
import { Button } from "@/components/ui/moving-borders";
import { Achievements as achievementsData } from "@/data";

export const Achievements = () => {
  return (
    <section id="achievements" className="py-6 sm:py-8 md:py-10">
      <h1 className="heading text-lg sm:text-xl md:text-2xl">
        My <span className="text-purple">Achievements</span>
      </h1>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {achievementsData.map((achievement) => (
          <Button
            key={achievement.id}
            borderRadius="1rem"
            className="flex-1 border-neutral-200 text-white dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex flex-col gap-1 p-2 py-3 sm:p-3 md:p-4 lg:flex-row lg:items-center lg:p-5">
              <Image
                width={45}
                height={40}
                src={achievement.thumbnail}
                alt={achievement.title}
                className="w-10 sm:w-12 md:w-14 lg:w-16"
              />

              <div className="lg:ms-3">
                <h1 className="text-start text-xs sm:text-sm md:text-base font-semibold">
                  {achievement.title}
                </h1>
                <p className="mt-1 text-start text-xs sm:text-sm md:text-sm text-white-100">
                  {achievement.description}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};
