import React from "react";
import {
  FaFacebook, FaTwitter, FaWhatsapp, FaGithub,
  FaInstagram, FaYoutube, FaTelegram, FaTiktok
} from "react-icons/fa";

const SocialMediaSection = () => {
  return (
    <section className="social-media-section py-8 px-2 text-white text-center relative z-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-300 sm:text-3xl md:text-4xl">Connect with Me</h2>
      <p className="text-base mb-6 sm:text-lg md:text-xl">Follow me on social media:</p>

      <div className="flex justify-center gap-4 flex-wrap">
        {/* Social Icons */}
        {[
          { href: "https://facebook.com/stayrahul", icon: <FaFacebook size={24} />, bg: "bg-blue-600 hover:bg-blue-700", label: "Facebook" },
          { href: "https://twitter.com/stayrahul", icon: <FaTwitter size={24} />, bg: "bg-blue-400 hover:bg-blue-500", label: "Twitter" },
          { href: "https://youtube.com/stayrahul", icon: <FaYoutube size={24} />, bg: "bg-red-600 hover:bg-red-700", label: "YouTube" },
          { href: "https://github.com/stayrahul", icon: <FaGithub size={24} />, bg: "bg-black hover:bg-gray-800", label: "GitHub" },
          { href: "https://instagram.com/stayrahul", icon: <FaInstagram size={24} />, bg: "bg-pink-500 hover:bg-pink-600", label: "Instagram" },
          { href: "https://wa.me/+9779822228722", icon: <FaWhatsapp size={24} />, bg: "bg-green-500 hover:bg-green-600", label: "WhatsApp" },
          { href: "https://t.me/stayrahul", icon: <FaTelegram size={24} />, bg: "bg-blue-500 hover:bg-blue-600", label: "Telegram" },
          { href: "https://tiktok.com/@rahulk_0", icon: <FaTiktok size={24} />, bg: "bg-black hover:bg-gray-800", label: "TikTok" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={item.label}
            className={`w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center ${item.bg} text-white rounded-full transition-all transform hover:scale-105 border-2 border-transparent hover:border-white`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaSection;
