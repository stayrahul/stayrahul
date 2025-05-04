// This file contains the data for the portfolio website, including navigation items, grid items, achievements, projects, testimonials, work experience, and tech stack.  


export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Gallery", link: "#gallery" },
  { name: "Contact", link: "#contact" }
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Class 11 Student | Exploring the World of Web Development",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-3 lg:min-h-[25vh]",
    imgClassName: " w-full h-full ",
    titleClassName: "justify-center",
    img: "/b1.svg",
    spareImg: "",
  },
  
  
  {
    id: 2,
    title: "Turning Curiosity Into Real-World Projects",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-2 min-h-[15vh] flex items-center justify-center",
    imgClassName: "absolute right-1 bottom-1 w-24 md:w-28",
    titleClassName: "justify-center",
    spareImg: "",
  },


  {
    id: 3,
    title: "Building My Tech Toolbox",
    description: "",
    className: "lg:col-span-1.5 md:col-span-2 md:row-span-1.5 min-h-[12vh] flex items-center justify-center",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  
  {
    id: 4,
    title: "Coding Dreams Into Reality ✨",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 min-h-[12vh] flex items-center justify-center",
    imgClassName: "",
    titleClassName: "justify-center",
    spareImg: "/b4.svg",
  },
  
  {
    id: 5,
    title: "Crafting My Personal Website",
    description: "",
    className: "lg:col-span-3 md:col-span-2 md:row-span-1 min-h-[12vh] flex items-center justify-center",
    imgClassName: "absolute right-1 bottom-1 w-24 md:w-28",
    titleClassName: "justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  
  {
    id: 6,
    title: "Let's Build and Learn Together 🚀",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1 min-h-[12vh] flex items-center justify-center",
    imgClassName: "absolute right-1 bottom-1 w-24 md:w-28",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  
  {
    id: 7,
    title: "Exploring the World of Web Development",
    description: "",
    className: "relative lg:col-span-2 md:col-span-2 md:row-span-1 min-h-[12vh] flex items-center justify-center text-center",
    imgClassName: "absolute inset-0 w-full h-full object-cover opacity-20",
    titleClassName: "justify-center",
    img: "/heroo.jpg", // Background image for ID 7
    spareImg: "",
  },
] as const;





export const Achievements = [
  {
    id: 1,
    title: "Microsoft AI Program Completion",
    description:
      "Successfully participated in the Microsoft AI program, gaining hands-on experience in AI concepts such as machine learning, neural networks, and NLP.",
    thumbnail: "/ai.svg", // Example image path for achievement
  },
  {
    id: 2,
    title: "Code Alpha Full Stack Development Internship",
    description:
      "Selected for a competitive internship at Code Alpha, focusing on full stack development with React, Node.js, and MongoDB.",
    thumbnail: "/code.svg", // Example image path for achievement
  },
  {
    id: 3,
    title: "Web Development Project",
    description:
      "Developed and deployed a personal portfolio website using HTML, CSS, JavaScript, and React.js to showcase skills and projects.",
     
      
    thumbnail: "/web-dev-logo.svg", // Example image path for achievement
    
  },
  {
    id: 4,
    title: "AI Chatbot Development",
    description:
      "Created an AI-powered chatbot using Python and TensorFlow, capable of answering user queries and providing information.",
    thumbnail: "/chat.svg", // Example image path for achievement
  },
];



export const projects = [
  {
    id: 1,
    title: "Rabindra Kushwaha - Portfolio",
    des: "A portfolio website showcasing my work and skills, built with HTML, CSS, JavaScript, and PHP.",
    img: "/p2.svg",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/php.svg"],
    link: "https://www.rabindrakushwaha.com.np",
    sourceCode: "https://github.com/stayrahul/rabindrakushwaha",
  },

  {
    id: "chatbot",
    title: "ChatBot",
    des: "A conversational AI chatbot using natural language understanding. Built with modern web tools and deployed for real-time interaction.",
    img: "/vercel1.svg",
    iconLists: [
      "/re.svg",
      "/git.svg",
      "/node1.svg",
    ],
    link: "https://my-awesome-chatbot-two-xi.vercel.app",
    sourceCode: "https://github.com/stayrahul/ChatBot"
  }
];


export const testimonials = [
  {
    quote: "Every expert was once a beginner. I'm just getting started, and the best is yet to come.",
    name: "Rahul Kushwaha",
    position: "Frontend Developer",
    img: "/rahul.svg",
    title: "Student with a passion for coding",
    className: "md:col-span-2",
  },
  {
    quote: "I believe in the power of technology to change lives. I'm here to make a difference, one line of code at a time.",
    name: "Rahul Kushwaha",
    position: "Frontend Developer",
    img: "/rahul.svg",
    title: "Student with a passion for coding",
    className: "md:col-span-2",
  },
  {
    quote: "Coding is not just a skill; it's a way of thinking. I'm learning to think like a developer.",
    name: "Rahul Kushwaha",
    position: "Frontend Developer",
    img: "/rahul.svg",
    title: "Student with a passion for coding",
    className: "md:col-span-2",
  },
];




export const workExperience = [
  {
    id: 1,
    title: "Aspiring Frontend Developer",
    desc: "Learning to build beautiful and responsive websites with React.js — turning passion into projects and theory into real-world code.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Exploring Mobile App Development",
    desc: "Experimenting with React Native to create mobile apps — combining my love for technology and gaming into real app experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Journey — Real World Coding",
    desc: "Worked on freelance projects, bringing client ideas to life. Learned teamwork, deadlines, and delivering real results — all while growing as a developer.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Blending Gaming Passion with Development",
    desc: "Led frontend design for a team project, crafting interactive experiences inspired by gaming UIs and social media creativity.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
 
] as const;


export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
