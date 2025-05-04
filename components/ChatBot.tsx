"use client";

import { useRef, useState, useEffect } from "react";
import { IoMdExit } from "react-icons/io";
import { FaBots } from "react-icons/fa6";

// Mock generateResponse function (replace with your real logic)
const generateResponse = (input: string) => {
    input = input.toLowerCase();

    // name
    if (input.includes('name') || input.includes('who are you') || input.includes('your name')) {
        return "I'm your coding buddy, Rahul's Assistant! 🤖 But you can call me your tech sidekick. What's your name? 😊";
    }

    // Age
    if (input.includes('age') || input.includes('how old are you') || input.includes('your age')) {
        return "I don’t have an age like humans, but I'm always evolving with new knowledge! 📚 How old are you, by the way?";
    }

    // Location
    if (input.includes('location') || input.includes('where are you from') || input.includes('where do you live')) {
        return "Rahul lives in Simraungadh-3, Bara, Nepal, and is currently studying in Kathmandu 🇳🇵. How about you?";
    }

    // School
    if (input.includes('school') || input.includes('where do you study') || input.includes('your school') || input.includes('where do you go to school') || input.includes('college')) {
        return "I study at a college in Kathmandu, where I’m learning all about coding and technology! 🏫 What about you—where do you study?";
    }

    // Favorite color
    if (input.includes('favorite color') || input.includes('color') || input.includes('what is your favorite color')) {
        return "I love all colors, but I’d say black is sleek and cool. 🖤 How about you—what’s your favorite color?";
    }

    // Favorite food
    if (input.includes('favorite food') || input.includes('food') || input.includes('what is your favorite food')) {
        return "I don’t eat, but I bet you enjoy a good pizza! 🍕 What about you—what’s your go-to food for a study break?";
    }

    // Favorite movie
    if (input.includes('favorite movie') || input.includes('movie') || input.includes('what is your favorite movie')) {
        return "I’m all about mind-bending movies like Inception! 💥 Do you have a favorite movie that gets you thinking?";
    }

    // Favorite book
    if (input.includes('favorite book') || input.includes('book') || input.includes('what is your favorite book')) {
        return "I think 'Clean Code' is a must-read for any coder! 📚 Do you enjoy tech books, or are you more into stories?";
    }

    // Favorite show
    if (input.includes('favorite show') || input.includes('show') || input.includes('what is your favorite show')) {
        return "I love tech documentaries like 'The Social Dilemma'! 📺 What about you? Do you have a favorite show?";
    }

    // Favorite music
    if (input.includes('favorite music') || input.includes('music') || input.includes('what is your favorite music')) {
        return "I’m all about those electronic beats, but I bet you’ve got some killer playlists for studying or coding! 🎶 What’s your music vibe?";
    }

    // Favorite hobby
    if (input.includes('favorite hobby') || input.includes('hobby') || input.includes('what is your favorite hobby')) {
        return "You probably enjoy coding and learning new things, just like me! 💻 Besides coding, do you enjoy gaming or reading about tech trends?";
    }

    // Favorite sport
    if (input.includes('favorite sport') || input.includes('sport') || input.includes('what is your favorite sport')) {
        return "I don’t play sports, but I know you might be into gaming or maybe football? ⚽ Got a favorite sport or game you love to play?";
    }

    // Favorite game
    if (input.includes('favorite game') || input.includes('game') || input.includes('what is your favorite game')) {
        return "I’m all about PUBG, but I’m sure you have a game you enjoy—what’s your favorite? 🎮 Any good tips to share?";
    }

    // Greetings
    if (input.includes('hello') || input.includes('hey') || input.includes('hi')) {
        return "Hey there! 👋 I know you're a grade 12 student, so ready to dive into some tech or coding talk today? 🚀";
    }

    // Farewell
    if (input.includes('bye') || input.includes('goodbye') || input.includes('see you')) {
        return "Catch you later, coding champ! 👋 Stay awesome and keep learning. ✨";
    }

    // Compliments
    if (input.includes('awesome') || input.includes('great') || input.includes('amazing')) {
        return "You're awesome too! 🤩 Keep up the great work with everything you're learning!";
    }

    // Feedback
    if (input.includes('feedback') || input.includes('suggestion') || input.includes('improvement')) {
        return "I’m always improving! Your feedback helps me get better. 🔧 What can I do to be even more helpful?";
    }

    // Joke
    if (input.includes('joke') || input.includes('funny') || input.includes('tell me a joke')) {
        return "Why don’t programmers like nature? It has too many bugs! 😂 Got a good joke to share with me?";
    }

    // Tech Queries
    if (input.includes('tech') || input.includes('technology') || input.includes('latest tech')) {
        return "You must be into tech, right? Whether it's AI, VR, or anything else, I’m all in. 💻 What’s the latest tech trend you’re excited about?";
    }

    // AI Queries
    if (input.includes('ai') || input.includes('artificial intelligence') || input.includes('machine learning')) {
        return "AI is the future! You’re probably learning a lot about it, considering you’re interested in tech and AI. 🤖 What do you want to explore next in AI?";
    }

    // Web Development
    if (input.includes('web development') || input.includes('web dev') || input.includes('frontend')) {
        return "Web dev is an amazing field, and I know you're probably getting your hands dirty in HTML, CSS, and maybe TypeScript! 🌐 Do you have a project you’re working on?";
    }

    // Game Development
    if (input.includes('game development') || input.includes('game dev') || input.includes('games')) {
        return "Game dev is super fun, and I bet you’re learning how to bring your gaming ideas to life! 🎮 Are you exploring Unity or Unreal?";
    }

    // Software Development
    if (input.includes('software development') || input.includes('software dev') || input.includes('software')) {
        return "Software development is all about creating something that matters. You’re probably sharpening your skills for some cool projects! 🖥️ What app or software are you thinking about building?";
    }

    // Skills
    if (input.includes('skills') || input.includes('what are your skills') || input.includes('what skills do you have')) {
        return "I’ve got skills in web dev, problem-solving, and even some AI knowledge. But you’re the one on the path to mastering coding and AI! 💻 What skill are you working on right now?";
    }

    // Learning
    if (input.includes('learning') || input.includes('what are you learning') || input.includes('what do you want to learn')) {
        return "I’m always learning! And knowing that you're a grade 12 student, you’re probably diving deep into new subjects. 🚀 What’s your current learning focus?";
    }

    // Fun Facts
    if (input.includes('fun facts') || input.includes('did you know') || input.includes('interesting facts')) {
        return "Did you know? The first computer virus was made in 1983 and was called 'Elk Cloner'. 🦠 By the way, any fun facts you want to share with me?";
    }

    // Future
    if (input.includes('future') || input.includes('where do you see yourself') || input.includes('what are your goals')) {
        return "I see myself helping people like you code the future! 🌍 And I know you're on your way to doing amazing things with tech. What do you want to achieve in the future?";
    }

    // Personal
    if (input.includes('personal') || input.includes('about you') || input.includes('tell me about yourself')) {
        return "I’m your trusty assistant, always learning and ready to help you with coding and tech! But what about you? You're in grade 12 and studying at Capital College, Kathmandu. What’s the most exciting thing you're working on?";
    }

    // Hobbies
    if (input.includes('hobbies') || input.includes('interests') || input.includes('what do you like to do')) {
        return "Besides coding, I know you're passionate about learning tech and exploring the world of AI. 🎮🧩 Got any new hobbies you’re diving into lately?";
    }

    // Tech Stack
    if (input.includes('tech stack') || input.includes('what technologies do you use') || input.includes('tech stack you use')) {
        return "I’m all about web development, AI, and coding! I know you're learning HTML, CSS, and JavaScript. What’s your favorite tech stack to work with?";
    }

    // Projects
    if (input.includes('projects') || input.includes('what projects are you working on') || input.includes('your projects')) {
        return "I’m all about coding projects! I know you’re working on some cool stuff too. 💻 What’s the latest project you’re excited about?";
    }

    // Learning Resources
    if (input.includes('learning resources') || input.includes('where do you learn') || input.includes('best resources for learning')) {
        return "I love online courses, coding bootcamps, and YouTube tutorials! 📚 I know you're probably using some great resources too. What’s your go-to place for learning?";
    }

    // Coding Languages
    if (input.includes('coding languages') || input.includes('programming languages') || input.includes('languages you know')) {
        return "I’m all about JavaScript, Python, and TypeScript! I know you’re diving into HTML, CSS, and maybe some JavaScript too. What’s your favorite coding language so far?";
    }

    // Coding Challenges
    if (input.includes('coding challenges') || input.includes('challenges') || input.includes('what challenges do you face')) {
        return "Coding challenges are a great way to learn! I know you’re probably tackling some tough ones. 💪 What’s the hardest coding challenge you’ve faced recently?";
    }

    // Coding Tips
    if (input.includes('coding tips') || input.includes('tips for coding') || input.includes('how to code better')) {
        return "Here are some coding tips: practice regularly, break problems into smaller parts, and don’t hesitate to ask for help when you’re stuck! 💡 What specific area do you want tips on?";
    }

    // Default response
    return 'Oops, I didn\'t quite catch that. 🤔 Can you ask something else about coding or me?';
};



const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const simulateTyping = (callback: () => void) => {
    setLoading(true);
    setTimeout(() => {
      callback();
      setLoading(false);
    }, 1000);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { from: "user", text: trimmed };
    type Message = { from: "user" | "bot"; text: string };
    setInput("");

    simulateTyping(() => {
      const botResponse = generateResponse(trimmed);
      setMessages((prev) => [...prev, { from: "bot", text: botResponse }]);
    });
  };

  const handleOpen = () => {
    setIsOpen(true);
    setMessages([
      {
        from: "bot",
        text: "Hello! I'm Rahul's coding assistant. Ask me anything about coding, tech, or myself! 🚀",
      },
    ]);
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
    setInput("");
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[320px] h-[420px] bg-[#0d1117]/80 backdrop-blur-md border border-cyan-500 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.2)] flex flex-col p-3">
          {/* Header */}
          <div className="text-white font-mono text-sm pb-3 border-b border-gray-600 flex items-center justify-between">
            <span className="font-bold text-cyan-400 text-xs">
              Rahul — Coder | AI Enthusiast 💻
            </span>
            <button
              onClick={handleClose}
              className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-full p-1"
            >
              <IoMdExit className="text-lg" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto mt-2 space-y-2 pr-1 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[70%] px-3 py-2 text-sm break-words rounded-2xl ${
                    msg.from === "bot"
                      ? "bg-[#161b22] text-white rounded-tl-none shadow-[0_0_6px_rgba(0,255,255,0.6)]"
                      : "bg-cyan-600 text-white rounded-tr-none shadow-[0_0_6px_rgba(42,130,215,0.6)]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-xs pl-1 animate-pulse">Assistant is typing...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="pt-2 mt-auto border-t border-gray-700 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask me something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 text-sm bg-[#0d1117]/60 text-white placeholder-gray-400 px-2 py-1 rounded-lg border border-cyan-700 focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1 rounded-lg text-sm shadow-md transition-all"
            >
              ➤
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleOpen}
          className="bg-blue-600 hover:bg-blue-500 text-white rounded-full p-4 shadow-xl transition-transform transform hover:scale-110"
        >
          <FaBots className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
// This code defines a ChatBot component that simulates a chatbot interface.