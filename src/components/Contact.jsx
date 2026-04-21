import { useRef } from 'react';
import { openingHours, socials } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Contact = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // 1. Initialize SplitText
    const titleSplit = new SplitText('#contact h2', { type: 'words' });
    
    // 2. Timeline with adjusted ScrollTrigger
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 92%', // Trigger much earlier to ensure visibility
        toggleActions: 'play none none reverse',
      }
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0, 
        yPercent: 100, 
        stagger: 0.05,
        duration: 0.8,
        ease: "power4.out",
        immediateRender: false // Critical: Prevents content from disappearing before GSAP is ready
      })
      .from('#contact h3, #contact p, #contact a', {
        opacity: 0, 
        y: 20, 
        stagger: 0.03,
        duration: 0.6,
        ease: "power2.out",
        immediateRender: false 
      }, '-=0.4')
      .to('#f-right-leaf', {
        y: -60, 
        rotation: 5, 
        duration: 2, 
        ease: 'sine.inOut',
        repeat: -1, 
        yoyo: true
      }, '-=1')
      .to('#f-left-leaf', {
        y: -40, 
        rotation: -5,
        duration: 2.5, 
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      }, '<');

    return () => {
      titleSplit.revert();
    };
  }, { scope: containerRef });

  return (
    // Added min-h-screen and a higher z-index to ensure it's not "swallowed" by previous sections
    <footer id="contact" ref={containerRef} className="relative bg-black text-white py-24 min-h-[80vh] overflow-hidden border-t border-white/10 z-10">
      
      {/* Parallax Leaves */}
      <img 
        src="/images/footer-right-leaf.png" 
        alt="leaf-right" 
        id="f-right-leaf" 
        className="absolute right-[-2%] top-[10%] w-32 md:w-64 opacity-40 pointer-events-none z-0" 
      />
      <img 
        src="/images/footer-left-leaf.png" 
        alt="leaf-left" 
        id="f-left-leaf" 
        className="absolute left-[-2%] bottom-[15%] w-32 md:w-64 opacity-40 pointer-events-none z-0" 
      />
      
      {/* Content Wrapper - Force visibility and relative positioning */}
      <div className="container mx-auto px-6 relative z-10 opacity-100">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-center md:text-left">
          Where to Find Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          <div className="contact-item">
            <h3 className="text-violet-500 font-bold uppercase tracking-widest text-sm mb-4">Visit Our Bar</h3>
            <p className="text-xl text-gray-300">456, Salt Lake, Kolkata, West Bengal</p>
          </div>
          
          <div className="contact-item">
            <h3 className="text-violet-500 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h3>
            <p className="text-xl text-gray-300">+91 9876543210</p>
            <p className="text-xl text-gray-300">hello@mocktail.com</p>
          </div>
          
          <div className="contact-item">
            <h3 className="text-violet-500 font-bold uppercase tracking-widest text-sm mb-4">Open Every Day</h3>
            {openingHours.map((time) => (
              <p key={time.day} className="text-gray-400">
                <span className="text-white font-medium">{time.day}</span> : {time.time}
              </p>
            ))}
          </div>
          
          <div className="contact-item">
            <h3 className="text-violet-500 font-bold uppercase tracking-widest text-sm mb-4">Socials</h3>
            <div className="flex gap-6 mt-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-125 transition-transform duration-300 filter invert hover:brightness-200 block"
                >
                  <img src={social.icon} alt={social.name} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 text-center text-gray-600 text-xs tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Mocktail - Crafted by Salony
        </div>
      </div>
    </footer>
  );
};

export default Contact;