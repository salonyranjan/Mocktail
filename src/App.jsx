import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";
import { useGSAP } from '@gsap/react';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Cocktails from './components/Cocktails.jsx';
import Mocktails from './components/Mocktails.jsx';  // ✅ ADDED
import About from './components/About.jsx';
import Art from './components/Art.jsx';
import Menu from './components/Menu.jsx';
import Contact from './components/Contact.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother, useGSAP);

const App = () => {
  const mainRef = useRef(null);
  const smootherRef = useRef(null);

  useGSAP(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: mainRef.current,
      content: '#smooth-content',
      smooth: 1.8,
      effects: true
    });

    gsap.utils.toArray('section').forEach((section, i) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1,
        ease: 'back.out(1.7)'
      });
    });

    return () => smootherRef.current?.kill();
  }, { scope: mainRef });

  return (
    <main ref={mainRef} className="bg-gradient-to-b from-black via-slate-900 to-black text-white min-h-screen antialiased font-sans">
      <Navbar />
      
      <div id="smooth-content">
        <section id="hero"><Hero /></section>
        <section id="cocktails"><Cocktails /></section>
        <section id="mocktails"><Mocktails /></section>  {/* ✅ ADDED */}
        <section id="about"><About /></section>
        <section id="art"><Art /></section>
        <section id="menu"><Menu /></section>
        <section id="contact"><Contact /></section>
      </div>
    </main>
  );
};

export default App;