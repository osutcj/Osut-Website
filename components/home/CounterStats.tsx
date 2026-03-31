"use client";

import React, { useEffect, useState, useRef } from "react";
import { UserCart, GraduationCap, City, Calendar, Trophy } from "iconoir-react";

interface CounterProps {
  startNumber: number;
  targetNumber: number;
  duration: number;
  suffix?: string;
  textLabel: string;
  icon: React.ReactNode;
}

const Counter = ({ startNumber, targetNumber, duration, suffix = "", textLabel, icon }: CounterProps) => {
  const [current, setCurrent] = useState(startNumber);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let intervalTime = 20;
    let increment = (targetNumber - startNumber) / (duration / intervalTime);
    let interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev + increment >= targetNumber) {
          clearInterval(interval);
          return targetNumber;
        }
        return prev + increment;
      });
    }, intervalTime);
    return () => clearInterval(interval);
  }, [isVisible, startNumber, targetNumber, duration]);

  const isDone = current >= targetNumber;
  const formattedNumber = Math.floor(current).toLocaleString("ro-RO");

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 bg-zinc-100 dark:bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-zinc-300 dark:border-zinc-700/50 hover:border-red-500/50 transition-colors shadow-lg shadow-zinc-300 dark:shadow-black/20">
      <div className="text-red-500 mb-4 bg-red-500/10 p-4 rounded-full">
        {icon}
      </div>
      <div className="text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">
        {formattedNumber}
        {isDone && suffix ? suffix : ""}
      </div>
      <p className="text-sm font-semibold uppercase tracking-wider text-zinc-600 dark:text-gray-400">
        {textLabel}
      </p>
    </div>
  );
};

export default function CounterStats() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <Counter
            startNumber={0}
            targetNumber={1000}
            duration={2000}
            suffix="+"
            textLabel="Voluntari"
            icon={<UserCart width={32} height={32} strokeWidth={2} />}
          />
          <Counter
            startNumber={18000}
            targetNumber={20000}
            duration={2000}
            suffix="+"
            textLabel="Studenți"
            icon={<GraduationCap width={32} height={32} strokeWidth={2} />}
          />
          <Counter
            startNumber={0}
            targetNumber={12}
            duration={2000}
            suffix=""
            textLabel="Facultăți"
            icon={<City width={32} height={32} strokeWidth={2} />}
          />
          <Counter
            startNumber={0}
            targetNumber={22}
            duration={2000}
            suffix="+"
            textLabel="Ani de activitate"
            icon={<Calendar width={32} height={32} strokeWidth={2} />}
          />
          <Counter
            startNumber={0}
            targetNumber={65}
            duration={2000}
            suffix="+"
            textLabel="Premii"
            icon={<Trophy width={32} height={32} strokeWidth={2} />}
          />
        </div>
      </div>
    </section>
  );
}
