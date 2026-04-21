import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins (essential for ScrollTrigger)
gsap.registerPlugin(ScrollTrigger);

// Mock data with Indian Rupees (₹)
const cocktailLists = [
  { name: 'Margarita', country: 'Mexico', detail: 'Classic lime & tequila', price: '₹450' },
  { name: 'Mojito', country: 'Cuba', detail: 'Mint & rum refresh', price: '₹399' },
  { name: 'Old Fashioned', country: 'USA', detail: 'Whiskey & bitters', price: '₹550' },
];

const mockTailLists = [
  { name: 'Virgin Mojito', country: 'Cuba', detail: 'Mint & soda', price: '₹250' },
  { name: 'Shirley Temple', country: 'USA', detail: 'Ginger ale & grenadine', price: '₹220' },
  { name: 'Blue Lagoon', country: 'Non-alcoholic', detail: 'Blue curaçao syrup', price: '₹299' },
];

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
      }
    });

    parallaxTimeline
      .from('#c-left-leaf', { 
        x: -100, 
        y: 100,
        rotation: -10,
        duration: 1,
        ease: 'none'
      })
      .from('#c-right-leaf', { 
        x: 100, 
        y: 100,
        rotation: 10,
        duration: 1,
        ease: 'none'
      }, 0);
  }, { dependencies: [] });

  return (
    <section id="cocktails" className="noisy relative py-20 overflow-hidden">
      {/* Animated Leaves */}
      <img 
        src="/images/cocktail-left-leaf.png" 
        alt="Left leaf decoration" 
        id="c-left-leaf" 
        className="absolute top-20 left-10 w-32 h-32 opacity-80 lg:w-48 lg:h-48" 
      />
      <img 
        src="/images/cocktail-right-leaf.png" 
        alt="Right leaf decoration" 
        id="c-right-leaf" 
        className="absolute top-32 right-10 w-32 h-32 opacity-80 lg:w-48 lg:h-48" 
      />
      
      {/* Lists Container - Original structure preserved */}
      <div className="list container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-start">
        <div className="popular">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Most popular cocktails:</h2>
          
          <ul className="space-y-6">
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="group flex justify-between items-start p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="md:me-28 flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400">{name}</h3>
                  <p className="text-gray-300 text-sm">{country} | {detail}</p>
                </div>
                <span className="text-2xl font-bold text-yellow-400 min-w-[80px]">{price}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="loved">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Most loved mocktails:</h2>
          
          <ul className="space-y-6">
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="group flex justify-between items-start p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="me-28 flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-400">{name}</h3>
                  <p className="text-gray-300 text-sm">{country} | {detail}</p>
                </div>
                <span className="text-2xl font-bold text-pink-400 min-w-[80px]">{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;