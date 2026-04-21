'use client';

import { useRef } from 'react';
import { openingHours, socials } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Recalculate ScrollTrigger for accurate height measurement
    ScrollTrigger.refresh();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      }
    });

    tl.from(".contact-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .from(".contact-item", {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .to("#f-right-leaf", {
      y: -30,
      rotation: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    }, 0)
    .to("#f-left-leaf", {
      y: 20,
      rotation: -10,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    }, 0);
  }, { scope: containerRef });

  return (
    <footer 
      id="contact" 
      ref={containerRef} 
      className="relative bg-[#050505] text-white py-32 overflow-hidden border-t border-white/10 z-10"
    >
      
      {/* 1. HIGH-CONTRAST NOISE OVERLAY */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* 2. ENHANCED CINEMATIC GLOWS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Emerald Glow - Bottom Left */}
        <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-emerald-500/20 blur-[150px] rounded-full" />
        
        {/* Pink Glow - Bottom Right */}
        <div className="absolute -bottom-32 -right-32 w-[700px] h-[700px] bg-pink-500/20 blur-[150px] rounded-full" />
      </div>

      {/* 3. PARALLAX LEAVES (Increased Visibility) */}
      <img 
        src="/images/footer-right-leaf.png" 
        alt="leaf-right" 
        id="f-right-leaf" 
        className="absolute right-[-2%] top-[5%] w-48 md:w-80 opacity-30 z-0 rotate-12 brightness-90 pointer-events-none" 
      />
      <img 
        src="/images/footer-left-leaf.png" 
        alt="leaf-left" 
        id="f-left-leaf" 
        className="absolute left-[-2%] bottom-[10%] w-48 md:w-80 opacity-30 z-0 -rotate-12 brightness-90 pointer-events-none" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <span className="text-emerald-400 font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">
            Let's Connect
          </span>
          
          <h2 className="contact-title text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            Experience the <br /> 
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(52,211,153,0.3)]">
              Mocktails 🍹
            </span>
          </h2>
        </div>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 pt-16 border-t border-white/10">
          
          {/* Location */}
          <div className="contact-item">
            <h3 className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">The Location</h3>
            <p className="text-2xl font-light text-gray-300 leading-tight italic">
              456, Salt Lake, <br/>Kolkata, WB
            </p>
          </div>
          
          {/* Inquiries */}
          <div className="contact-item">
            <h3 className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Inquiries</h3>
            <p className="text-2xl font-light text-gray-300 font-mono tracking-tighter">+91 9876543210</p>
            <p className="text-lg font-light text-emerald-400 underline underline-offset-8 mt-4 decoration-emerald-500/30 hover:text-cyan-400 transition-colors">
              hello@mocktail.com
            </p>
          </div>
          
          {/* Hours */}
          <div className="contact-item">
            <h3 className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Lounge Hours</h3>
            <div className="space-y-2">
              {openingHours.map((time) => (
                <p key={time.day} className="text-sm text-gray-400 flex justify-between max-w-[220px] border-b border-white/5 pb-1">
                  <span className="text-white/70">{time.day}</span>
                  <span className="font-mono text-xs">{time.time}</span>
                </p>
              ))}
            </div>
          </div>
          
          {/* Socials */}
          <div className="contact-item">
            <h3 className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Follow The Art</h3>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-emerald-500 hover:border-emerald-500 hover:scale-110 hover:-translate-y-1 transition-all duration-500 group"
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5 brightness-200 group-hover:filter-none transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] text-gray-500 uppercase tracking-[0.4em] font-medium">
          <p>© {new Date().getFullYear()} Mocktail — Cinematic Zero Proof</p>
          <div className="flex gap-8">
            <span className="hover:text-emerald-400 transition-colors cursor-default">Designed by Salony</span>
            <span className="hover:text-cyan-400 transition-colors cursor-default">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;