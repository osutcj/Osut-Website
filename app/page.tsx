import React from "react";
import "./home.css";
import HeroSection from "@/components/home/HeroSection";
import CounterStats from "@/components/home/CounterStats";
import AwardsTimeline from "@/components/home/AwardsTimeline";
import BlogSection from "@/components/BlogSection";
import HomeProjects from "@/components/home/HomeProjects";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-wrap homepage mx-auto font-sans text-gray-800 dark:text-gray-200">
      <HeroSection />
      <CounterStats />
      
      <div className="content">
        <div id="blog-anchor" className="w-full max-w-5xl relative flex justify-center items-center mt-24 mb-12 mx-auto px-6">
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent top-1/2 -translate-y-1/2 opacity-100"></div>
          <h2 className="bg-white dark:bg-[#121212] px-10 text-4xl md:text-5xl font-bold relative z-10 tracking-wide text-zinc-900 dark:text-white text-center uppercase leading-tight">
            OSUT te <span className="text-red-600">informează</span>
          </h2>
        </div>
        
        <BlogSection limit={3} />
        
        <div className="flex justify-center mt-8 mb-16">
          <Link href="/educational" className="bg-[#b51c1c] hover:bg-[#8f1515] text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-105 shadow-xl hover:shadow-red-900/50">
            Vezi toate anunțurile &rarr;
          </Link>
        </div>
      </div>
      
      <AwardsTimeline />
      <HomeProjects />
    </main>
  );
}
