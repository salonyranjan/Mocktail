import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { navLinks } from '../../constants/index.js';

// Registration is key
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Navbar = () => {
  const navRef = useRef();

  useGSAP(() => {
    gsap.to(navRef.current, {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      duration: 0.5,
      scrollTrigger: {
        trigger: 'body',
        start: 'top -50px',
        scrub: true,
      }
    });
  }, { scope: navRef });

  const handleNavClick = (e, id) => {
    e.preventDefault();
    
    // Map 'work' from constants to the 'art' section ID
    const targetId = id === 'work' ? 'art' : id;
    const element = document.getElementById(targetId);

    if (element) {
      // Use GSAP for the smooth cinematic scroll
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power3.inOut"
      });
    } else {
      console.error(`Could not find element with id: ${targetId}`);
    }
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-[1000] py-5 bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-6">
        <a href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
          <p className="text-white font-bold text-xl uppercase">Mocktail</p>
        </a>

        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-gray-400 hover:text-white uppercase text-sm tracking-widest transition-all"
              >
                {link.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;