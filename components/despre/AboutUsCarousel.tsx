"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const images = [
  "/assets/images/images/main/1.webp",
  "/assets/images/images/main/2.webp",
  "/assets/images/images/main/3.webp",
  "/assets/images/images/main/4.webp",
  "/assets/images/images/main/5.webp",
  "/assets/images/images/main/6.webp",
];

export default function AboutUsCarousel() {
  return (
    <section className="w-full py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade, Navigation]}
            effect="fade"
            speed={1000}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            loop={true}
            className="w-full aspect-[4/3] md:aspect-[21/9] group"
            style={{
              "--swiper-theme-color": "#cc0000",
              "--swiper-navigation-color": "rgba(255, 255, 255, 0.8)",
              "--swiper-navigation-size": "20px",
              "--swiper-pagination-color": "#cc0000",
              "--swiper-pagination-bullet-inactive-color": "#ffffff",
              "--swiper-pagination-bullet-inactive-opacity": "0.6",
            } as React.CSSProperties}
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Momente din OSUT - ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority={idx === 0}
                  />
                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          background-color: rgba(255, 255, 255, 0.15);
          width: 54px !important;
          height: 54px !important;
          border-radius: 50%;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          opacity: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px !important;
          font-weight: 900;
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .swiper-button-next svg,
        .swiper-button-prev svg {
          width: 20px !important;
          height: 20px !important;
          stroke-width: 3px !important;
          color: white;
        }

        .swiper:hover .swiper-button-next,
        .swiper:hover .swiper-button-prev {
          opacity: 1;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(204, 0, 0, 0.9);
          border-color: #cc0000;
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(204, 0, 0, 0.4);
        }
      `}</style>
    </section>
  );
}
