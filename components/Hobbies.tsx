// components/Hobbies.tsx

export const Hobbies = () => {
  const hobbies = [
    "Gaming",
    "Coding and Web Development",
    "Reading Tech Blogs",
    "Playing Chess",
    "Listening to Music",
    "Exploring New Technologies",
  ];

  return (
    <section className="py-4 bg-transparent">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-white">Hobbies</h2>
      <div className="grid gap-3 px-4 sm:grid-cols-2 md:grid-cols-3">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-4 min-h-[100px] rounded-xl border border-white/20
            hover:border-cyan-400 hover:shadow-cyan-400 hover:shadow-md 
            hover:-translate-y-1 hover:scale-105 
            transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-sm font-medium text-white group-hover:text-cyan-300 transition duration-300 text-center">
              {hobby}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
