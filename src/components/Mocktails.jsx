import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { allCocktails } from '../../constants/index.js';

gsap.registerPlugin(ScrollTrigger);

const Mocktails = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // 1. Ref cleanup to ensure array stays in sync with mapping
    cardsRef.current = cardsRef.current.slice(0, allCocktails.length);

    // 2. Sophisticated stagger animation
    gsap.from(cardsRef.current, {
      y: 80,
      opacity: 0,
      rotateX: -15, // Subtle 3D tilt for extra "pop"
      stagger: {
        each: 0.1,
        from: "start"
      },
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="cocktails" className="min-h-screen py-32 px-8 lg:px-16 bg-black">
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
          The Mocktails
        </h2>
        <p className="text-xl text-white/50 max-w-2xl mx-auto font-light tracking-wide italic">
          &ldquo;Sophistication in every sip, without the spirit.&rdquo;
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {allCocktails.map((cocktail, i) => (
          <div 
            key={cocktail.id}
            ref={el => cardsRef.current[i] = el}
            className="group bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-6 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-700 cursor-pointer"
          >
            <div className="relative mb-8 overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={cocktail.image} 
                alt={cocktail.name}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              {/* Localized Price Badge */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-emerald-400 px-5 py-2 rounded-2xl font-black text-lg border border-white/10 shadow-2xl">
                ₹{Math.floor(Math.random() * (1200 - 800 + 1)) + 800}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
              {cocktail.name}
            </h3>
            <p className="text-white/40 text-sm mb-8 line-clamp-2 italic font-light">
              {cocktail.title}
            </p>
            
            <button className="w-full relative overflow-hidden bg-white/5 group-hover:bg-emerald-600 text-white py-5 px-6 rounded-2xl font-black uppercase tracking-widest transition-all duration-500 border border-white/10 hover:border-transparent">
              <span className="relative z-10">Add to Pour</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mocktails;