import React from 'react';

type EducationItem = {
  id: number;
  degree: string;
  school: string;
  year: string;
  link?: string; // Optional link property
};

const educationList: EducationItem[] = [
  { 
    id: 1,
    degree: 'Class 11 — Science',
    school: 'Capital College and Research Centre, Kathmandu', 
    year: '(2024 - Present)',
    link: 'https://ccrc.edu.np' // Link to your college
  },
  { 
    id: 2,
    degree: 'Class 9 to Class 10',
    school: 'Adhunik Rastriya Secondary School, Hetauda', 
    year: '(Completed in 2024)',
    link: 'https://schooladhunik.edu.np' // Link to your school
  }
];

const Education: React.FC = () => {
  return (
    <section className="py-4 bg-transparent">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-white">Education</h2>
      <div className="grid gap-3 px-3 sm:grid-cols-1 md:grid-cols-2">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-3 min-h-[100px] rounded-lg border border-white/20
            hover:border-cyan-400 hover:shadow-cyan-400 hover:shadow-sm 
            hover:-translate-y-1 hover:scale-105 
            transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition duration-300 text-center">
              {edu.degree}
            </h3>
            <p className="mt-1 text-xs text-gray-300 group-hover:text-cyan-200 transition duration-300 text-center">
              {edu.link ? (
                <a href={edu.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {edu.school}
                </a>
              ) : (
                edu.school
              )}
            </p>
            <p className="text-[10px] text-gray-400 group-hover:text-cyan-100 transition duration-300 text-center">
              {edu.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
