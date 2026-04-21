"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allCocktails } from "../../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const Mocktails = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      cardsRef.current = cardsRef.current.filter(Boolean);
      ScrollTrigger.refresh();

      const validCards = cardsRef.current;
      if (validCards.length > 0) {
        gsap.from(validCards, {
          y: 40,
          opacity: 0,
          stagger: 0.06,
          duration: 0.8,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: containerRef, dependencies: [allCocktails] }
  );

  if (!allCocktails?.length) {
    return (
      <section
        ref={containerRef}
        id="mocktails"
        className="noisy relative py-32 overflow-hidden min-h-screen bg-black"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-white/50 text-center">No mocktails available.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="mocktails"
      className="noisy relative py-32 overflow-hidden min-h-screen bg-black"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* HEADER */}
        <div className="text-center mb-24">
  {/* Main Header with Gradient Text */}
  <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent drop-shadow-[0_10px_10px_rgba(52,211,153,0.3)]">
    Mocktails 🍹
  </h2>
  
  {/* Subline with highlight color */}
  <p className="text-xl md:text-2xl text-slate-400 font-light italic">
    Sophistication in every sip, <span className="text-cyan-400 font-bold">without the spirit.</span>
  </p>
</div>

        {/* GRID: Crowd Favorites + Highly Acclaimed */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* COLUMN 1: CROWD FAVORITES (First 3) */}
          <div className="popular">
            <div className="mb-10 border-l-4 border-emerald-400 pl-6">
              <span className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-1 block">
                The Vanguard
              </span>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
                Crowd <span className="text-emerald-400">Favorites</span>
              </h3>
            </div>

            <ul className="space-y-5" role="list">
              {allCocktails.slice(0, 3).map((item, i) => (
                <li
                  key={item.id || item.name || i}
                  ref={(el) => {
                    if (el) cardsRef.current[i] = el;
                  }}
                  className="group flex justify-between items-center p-6 md:p-7 bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 hover:border-emerald-400/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-emerald-400/10 transition-all duration-500 ease-out"
                >
                  <div className="flex-1 pr-5">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-sm md:text-base mt-1 italic">
                      {item.country} • {item.detail}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black tracking-tight text-emerald-400">
                      ₹{item.price || "299"}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2: HIGHLY ACCLAIMED (Next up to 6) */}
          <div className="loved lg:mt-20">
            <div className="mb-10 lg:text-right border-r-4 border-pink-400 pr-6">
              <span className="text-pink-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-1 block">
                The Elite
              </span>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
                Highly <span className="text-pink-400">Acclaimed</span>
              </h3>
            </div>

            <ul className="space-y-5" role="list">
              {allCocktails
                .slice(3, Math.min(9, allCocktails.length))
                .map((item, i) => {
                  const cardIndex = i + 3;
                  return (
                    <li
                      key={item.id || item.name || i}
                      ref={(el) => {
                        if (el) cardsRef.current[cardIndex] = el;
                      }}
                      className="group flex justify-between items-center p-6 md:p-7 bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 hover:border-pink-400/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-pink-400/10 transition-all duration-500 ease-out"
                    >
                      <div className="flex-1 pr-5 lg:text-right">
                        <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-pink-300 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-gray-500 text-sm md:text-base mt-1 italic">
                          {item.country} • {item.detail}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <span className="text-xl font-black tracking-tight text-pink-400">
                          ₹{item.price || "275"}
                        </span>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mocktails;