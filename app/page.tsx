"use client";

import React from "react";
import "./home.css";
import HeroSection from "@/components/home/HeroSection";
import CounterStats from "@/components/home/CounterStats";
import AwardsTimeline from "@/components/home/AwardsTimeline";
import BlogSection from "@/components/BlogSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-wrap homepage mx-auto font-sans text-gray-800 dark:text-gray-200">
      <HeroSection />
      <CounterStats />
      
      <div className="content">
        <div id="blog-anchor" className="container mx-auto mt-12 mb-8">
          <h2 className="text-outline">OSUT TE INFORMEAZĂ</h2>
        </div>
        
        <BlogSection limit={3} />
        
        <div className="flex justify-center mt-8 mb-16">
          <Link href="/educational#osut-te-informeaza" className="bg-[#b51c1c] hover:bg-[#8f1515] text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-105 shadow-xl hover:shadow-red-900/50">
            Vezi toate anunțurile &rarr;
          </Link>
        </div>
      </div>
      
      <AwardsTimeline />
    </main>
  );
}
