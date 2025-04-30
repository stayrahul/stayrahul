"use client";

const GitHubStats = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold text-white">🚀 GitHub Activity</h2>

      <img
        src="https://github-readme-stats.vercel.app/api?username=stayrahul&show_icons=true&theme=tokyonight"
        alt="GitHub Stats"
        className="rounded-lg shadow-lg"
      />

<img
        src="https://github-readme-streak-stats.herokuapp.com/?user=stayrahul&theme=tokyonight"
        alt="GitHub Streak"
        onLoad={() => console.log('Image loaded successfully')}
        onError={() => console.error('Failed to load image')}
        className="rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
      />


      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=stayrahul&layout=compact&theme=tokyonight"
        alt="Top Languages"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default GitHubStats;
