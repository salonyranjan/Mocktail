import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { cocktailLists, mockTailLists } from '../../constants/index.js';

gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
      }
    });
    
    parallaxTimeline
      .from('#c-left-leaf', { x: -100, y: 100 })
      .from('#c-right-leaf', { x: 100, y: 100 });
  }, { scope: sectionRef });

  return (
    <section 
      id="cocktails" 
      ref={sectionRef} 
      className="noisy min-h-screen py-24 relative"
      style={{ zIndex: 2 }}  // ✅ FIX: Above video
    >
      {/* Leaves - Non-interactive */}
      <img 
        src="/images/cocktail-left-leaf.png" 
        alt="l-leaf" 
        id="c-left-leaf"
        className="absolute left-8 top-1/4 w-32 lg:w-48 z-10 pointer-events-none"  // ✅ z-10 + no pointer
      />
      <img 
        src="/images/cocktail-right-leaf.png" 
        alt="r-leaf" 
        id="c-right-leaf"
        className="absolute right-8 top-1/3 w-32 lg:w-48 z-10 pointer-events-none"  // ✅ z-10 + no pointer
      />
      
      {/* Content - Highest layer */}
      <div className="list relative z-20 max-w-5xl mx-auto px-6 lg:px-12 mt-32">
        <div className="popular mb-24 lg:mb-32">
          <h2 className="text-4xl lg:text-5xl font-black text-center mb-16 pb-8 z-30 relative">
            Most popular cocktails:
          </h2>
          
          <ul className="space-y-6">
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="relative z-30 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/20">
                <div className="md:me-28 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{name}</h3>
                    <p className="text-gray-300">{country} | {detail}</p>
                  </div>
                  <span className="text-2xl font-bold text-white shrink-0">- {price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="loved">
          <h2 className="text-4xl lg:text-5xl font-black text-center mb-16 pb-8 z-30 relative">
            Most loved mocktails:
          </h2>
          
          <ul className="space-y-6">
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="relative z-30 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/20">
                <div className="me-28 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{name}</h3>
                    <p className="text-gray-300">{country} | {detail}</p>
                  </div>
                  <span className="text-2xl font-bold text-white shrink-0">- {price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;