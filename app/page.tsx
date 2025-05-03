'use client';

import React from "react";
import { Hero } from "@/components/hero";
import { Grid } from "@/components/grid";
import Education from "@/components/education";
import { Lang } from "@/components/lang";
import Skills from "@/components/Skills";
import { Hobbies } from "@/components/Hobbies";
import { RecentProjects } from "@/components/recent-projects";
import { Achievements } from "@/components/Achievements";
import { Gallery } from "@/components/Gallery";
import { DevicesSection } from "@/components/DevicesSection";
import { Experience } from "@/components/experience";
import { ReachOut } from "@/components/ReachOut";
import SocialMediaSection from "@/components/SocialMediaSection";
import { Contact } from "@/components/contact";
import ThankYouSection from "@/components/ThankYouSection";
import  VisitorCounter  from "@/components/VisitorCounter";
import FunFacts from "@/components/FunFacts";
import { Footer } from "@/components/footer";
import  DevStates  from "@/components/DevStats";
import  ChatBot  from "@/components/ChatBot";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";


const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">      {/* Floating Navbar */}
      <FloatingNav navItems={navItems} />

      {/* Page Content */}
      <section className="w-full max-w-7xl space-y-10">
        <Hero />
        <Grid />
        <Education />
        <ChatBot />
        <Lang />
        <Skills />
        <DevStates />

        <Hobbies />
        <RecentProjects />
        <Achievements />
        <Gallery />
        <DevicesSection />
        <Experience />
        <FunFacts />
        <ReachOut />
        <SocialMediaSection />
        <Contact />
        <ThankYouSection />
        <VisitorCounter /> {/* Added VisitorCounter component */}
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default MainPage;
