import React, { useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import ProblemSolution from './components/ProblemSolution.tsx';
import Features from './components/Features.tsx';
import Gallery from './components/Gallery.tsx';
import Comparison from './components/Comparison.tsx';
import Testimonials from './components/Testimonials.tsx';
import Pricing from './components/Pricing.tsx';
import FAQ from './components/FAQ.tsx';
import BookingForm from './components/BookingForm.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '0px', threshold: 0.15 }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
      if (section instanceof HTMLElement) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section instanceof HTMLElement) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-black text-gray-200 antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <Comparison />
        <Gallery />
        <Testimonials />
        <Pricing />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
